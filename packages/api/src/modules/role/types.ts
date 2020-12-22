import { gql } from 'apollo-server-express';

export default gql`
  enum RoleSlug {
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

  extend type Query {
    projectUsers(projectId: ID!): [RoleWithUser!]!
  }

  extend type Mutation {
    inviteUserToProject(
      projectId: ID!
      userId: ID!
      role: AvailableRoleSlugs!
    ): RoleWithUserAndProject!
    updateUserProjectRole(
      projectId: ID!
      userId: ID!
      role: AvailableRoleSlugs!
    ): RoleWithUser!
    removeUserFromProject(projectId: ID!, userId: ID!): User!
  }
`;
