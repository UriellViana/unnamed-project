import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
  enum RoleSlug {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
=======
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    # viewer
>>>>>>> Update Role
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
=======
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    # viewer
>>>>>>> Update Role
    contributor
    developer
    manager
    owner
    proofreader
  }

  enum AvailableRoleSlugs {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
=======
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
=======
  enum InvitedRole {
>>>>>>> Back-End Review
    # viewer
>>>>>>> Update Role
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
=======
=======
    # viewer
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
    # viewer
>>>>>>> Update Role
    contributor
    proofreader
    developer
    manager
  }

  type Role {
    id: ID!
    role: String!
    user: String!
    project: String!
    createdAt: Date!
    updatedAt: Date!
  }
# Por que esses diferentes tipos de Role... ?
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
