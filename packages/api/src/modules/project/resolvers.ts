import { ApolloError } from 'apollo-server-express';
import { model as Project } from '.';
import TradulabError from '../../errors';
import { model as Role } from '../role';
import { ROLES } from '../role/constants';
import { ERROR_CODES as projectCodes } from './constants';

async function createProject(_, args, context) {
  const project = new Project({
    owner: context.user,
    displayName: args.displayName,
    private: args.private,
  });

  const role = new Role({
    role: ROLES.OWNER,
    user: context.user,
    project,
  });

  try {
    await Promise.all([project.save(), role.save()]);
  } catch (err) {
    await project.remove();
    await role.remove();

    console.error(JSON.stringify(err, null, 2));

    if (err.name === 'MongoError' && err.code === 11000) {
      const duplicatedField = Object.keys(err.keyPattern)[0];

      switch (duplicatedField) {
        case 'slug':
          throw new TradulabError(projectCodes.SLUG_ALREADY_IN_USE);
        default:
          throw new ApolloError(err.message);
      }
    }

    if (err.errors) {
      const invalidField = Object.keys(err.errors)[0];
      const errorCode = err.errors[invalidField].properties.message;
      throw new TradulabError(errorCode);
    }

    throw err;
  }

  return project;
}

// Não estamos tratando o Erro do roles.exect(), conflito com tipagem
async function myProjects(_, __, context) {
  const roles = await Role.find({ user: context.user })
    .populate('project')
    .exec();

  return roles;
}

export const queries = { myProjects };
export const mutations = { createProject };
