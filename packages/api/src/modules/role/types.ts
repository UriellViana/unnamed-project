import { gql } from 'apollo-server-express';
// Role: GraphQL Object Type
// id: Fields
// special kind of scalar that is restricted a particular set of allowed values
// type modifiers: ! Non-Null
export default gql`
<<<<<<< HEAD
  enum InvitedRole {
=======
  enum RoleSlug {
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
    # viewer
=======
>>>>>>> Update Role
    contributor
    developer
    manager
<<<<<<< HEAD
=======
    owner
    proofreader
>>>>>>> Update Role
  }
<<<<<<< HEAD
=======

  enum AvailableRoleSlugs {
    contributor
    proofreader
    developer
    manager
  }

>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
  type Role {
    id: ID!
    role: String!
    user: String!
    project: String!
    createdAt: Date!
    updatedAt: Date!
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
# Por que esses diferentes tipos de Role... ?
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======

>>>>>>> we tested everything and it seems ok, including a project fix
  type RoleWithProject {
    id: ID!
    role: String!
    user: String!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }
  type RoleWithUser {
    id: ID!
    role: String!
    user: User!
    project: String!
    createdAt: Date!
    updatedAt: Date!
  }
  type RoleWithUserAndProject {
    id: ID!
    role: String!
    user: User!
    project: Project!
    createdAt: Date!
    updatedAt: Date!
  }
  input inviteUserToProjectPayload {
    projectId: ID!
    userId: ID!
    role: InvitedRole!
  }
  input removeUserFromProjectPayload {
    projectId: ID!
    userId: ID!
  }
  extend type Mutation {
    inviteUserToProject(
      payload: inviteUserToProjectPayload
    ): RoleWithUserAndProject!
    updateUserProjectRole(payload: inviteUserToProjectPayload): Role!
    removeUserFromProject(payload: removeUserFromProjectPayload): Boolean
  }
  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
  }
`;
