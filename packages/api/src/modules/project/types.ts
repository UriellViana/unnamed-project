import { gql } from 'apollo-server-express';

export default gql`
  type Project {
    _id: ID!
    slug: String!
    name: String!
    owner: ID!
    private: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }
<<<<<<< HEAD
  input createProjectPayload {
    name: String!
    private: Boolean
=======

  type ProjectWithUser {
    id: ID!
    slug: String!
    displayName: String!
    owner: User!
    private: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    myProjects: [RoleWithProject!]!
>>>>>>> we tested everything and it seems ok, including a project fix
  }
  extend type Mutation {
<<<<<<< HEAD
    createProject(payload: createProjectPayload): Project!
  }
  extend type Query {
    listProjects: [RoleWithProject!]!
=======
    createProject(displayName: String!, private: Boolean): ProjectWithUser!
>>>>>>> we tested everything and it seems ok, including a project fix
  }
`;
