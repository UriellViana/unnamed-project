import { ApolloError } from 'apollo-server-express';

import {
  ROLES,
  ROLES_LIST,
  ROLES_AVAILABLE_INVITE_USER,
  ERROR_CODES as roleCodes,
} from './constants';
import { ERROR_CODES as projectCodes } from '../project/constants';
import { ERROR_CODES as userCodes } from '../user/constants';
import { model as Project } from '../project';
import { model as Role } from '../role';
import { model as User } from '../user';
import TradulabError from '../../errors';
import {
  buildConnectionQuery,
  buildConnectionResponse,
  ConnectionArgs,
} from '../../helpers/mappers';
import { IRole } from './model';

function myRole(_parent, args, context) {
  return Role.findOne({ project: args.projectId, user: context.user });
}

interface ProjectUserArgs extends ConnectionArgs {
  projectId: string;
}

async function projectUsers(_parent, args: ProjectUserArgs) {
  const { where, limit } = buildConnectionQuery<IRole>(args);

  where.project = args.projectId;

  const roles = await Role.find(where)
    .limit(limit + 1)
    .sort('-createdAt')
    .populate('user')
    .exec();

  return buildConnectionResponse(roles, limit);
}

async function inviteUserToProject(
  _parent,
  { userId, projectId, role },
  { user: currentUserId }
) {
  if (userId === currentUserId)
    throw new TradulabError(roleCodes.INVITED_YOURSELF);

  const project = await Project.findById(projectId);

  if (!project) throw new TradulabError(projectCodes.PROJECT_NOT_FOUND);

  const targetUser = await User.findById(userId);

  if (!targetUser) throw new TradulabError(userCodes.USER_NOT_FOUND);

  const existingRole = await Role.findOne({
    project: projectId,
    user: userId,
  });

  if (existingRole) throw new TradulabError(roleCodes.INVITED_EXISTING_ROLE);

  const currentUserRole = await Role.findOne({
    project: projectId,
    user: currentUserId,
  });

  if (!currentUserRole)
    throw new TradulabError(roleCodes.INVITED_NOT_EXISTING_ROLE);

  if (!ROLES_AVAILABLE_INVITE_USER.includes(currentUserRole.role))
    throw new TradulabError(roleCodes.INVITED_NOT_AVAILABLE);

  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(role);

  if (currentUserRoleIndex >= targetUserRoleIndex)
    throw new TradulabError(roleCodes.INVITED_SAME_OR_HIGHER_ROLE);

  try {
    const targetUserRole = await new Role({
      role: ROLES[role.toUpperCase()],
      project,
      user: targetUser,
    }).save();

    return targetUserRole;
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }
}

async function updateUserProjectRole(
  _parent,
  { userId, projectId, role },
  { user: currentUser }
) {
  if (userId === currentUser._id)
    throw new TradulabError(roleCodes.UPDATED_YOURSELF);

  const targetUserRole = await Role.findOne({
    user: userId,
    project: projectId,
  });

  if (!targetUserRole)
    throw new TradulabError(roleCodes.UPDATED_NOT_EXISTING_ROLE);

  const currentUserRole = await Role.findOne({
    user: currentUser,
    project: projectId,
  });

  const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
  const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);
  const roleIndex = ROLES_LIST.indexOf(role);

  if (currentUserRoleIndex >= roleIndex)
    throw new TradulabError(roleCodes.UPDATED_TO_SAME_OR_HIGHER_ROLE);

  if (currentUserRoleIndex >= targetUserRoleIndex)
    throw new TradulabError(roleCodes.UPDATED_FROM_SAME_OR_HIGHER_ROLE);

  try {
    targetUserRole.role = role;

    await targetUserRole.save();

    return targetUserRole;
  } catch (err) {
    console.error(err);
    throw new ApolloError(err.message, 'INTERNAL_ERROR');
  }
}

async function removeUserFromProject(
  _parent,
  { userId, projectId },
  { user: currentUserId }
) {
  const targetUserRole = await Role.findOne({
    user: userId,
    project: projectId,
  });

  if (!targetUserRole)
    throw new TradulabError(roleCodes.REMOVED_NOT_EXISTING_ROLE);

  if (userId === currentUserId && targetUserRole.role === ROLES.OWNER)
    throw new TradulabError(roleCodes.REMOVED_YOURSELF_AS_OWNER);

  if (userId !== currentUserId) {
    const currentUserRole = await Role.findOne({
      user: currentUserId,
      project: projectId,
    });

    const currentUserRoleIndex = ROLES_LIST.indexOf(currentUserRole.role);
    const targetUserRoleIndex = ROLES_LIST.indexOf(targetUserRole.role);

    if (currentUserRoleIndex >= targetUserRoleIndex)
      throw new TradulabError(roleCodes.REMOVED_SAME_OR_HIGHER_ROLE);
  }

  try {
    await targetUserRole.remove();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const mutations = {
  inviteUserToProject,
  removeUserFromProject,
  updateUserProjectRole,
};
export const queries = { myRole, projectUsers };
