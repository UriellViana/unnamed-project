import { gql } from 'apollo-server-express';

export default gql`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Rebase and resolving conflicts with master
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  scalar FileUpload

  enum Extentions {
<<<<<<< HEAD
    csv
    json
    txt
=======
    json
    txt
    csv
>>>>>>> changes
  }

  type Progress {
    approval: Int!
    translation: Int!
  }

<<<<<<< HEAD
  type File {
    id: ID!
    extension: Extentions
    filename: String!
<<<<<<< HEAD
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> changes
  type File {
    id: ID!
    extension: Extentions
    filename: String!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
    progress: Progress!
>>>>>>> changes
=======
>>>>>>> Rebase and resolving conflicts with master
    project: Project!
    sourceLanguage: String!
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
>>>>>>> Criado o module files e a resolver create File
=======
    project: Project!
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
>>>>>>> Criado o module files e a resolver create File
=======
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
>>>>>>> Criado o module files e a resolver create File
=======
    progress: Progress!
=======
=======
=======
  scalar FileUpload

>>>>>>> Create file resolver working at front-end and back-end without error treatment
  type File {
    id: ID!
    filename: String!
<<<<<<< HEAD
    translation_progress: Int!
    approval_progress: Int!
    source_language: String!
    extesion: String!
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
    project: Project!
    sourceLanguage: String!
>>>>>>> changes
=======
=======
=======
    translationProgress: Int!
    approvalProgress: Int!
    sourceLanguage: String!
    extension: String!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    project: Project!
>>>>>>> Criado o module files e a resolver create File
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createFile(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      file: FileUpload!
      sourceLanguage: String!
      projectId: ID!
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Criado o module files e a resolver create File
=======
      file: FileUpload!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Criado o module files e a resolver create File
=======
      file: FileUpload!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
=======
>>>>>>> Corrigido erro de cors pra qualquer request
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
<<<<<<< HEAD
=======
      file: FileUpload!
      projectId: ID!
<<<<<<< HEAD
>>>>>>> Rebase and resolving conflicts with master
=======
      sourceLanguage: String!
>>>>>>> Back-End Review
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
>>>>>>> Corrigido erro de cors pra qualquer request
    ): File!
  }

  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;
<<<<<<< HEAD

// Acho que o progress pode ser colocado no futuro, pois ele vai ser mais complexo que isso, progress de translation para qual lingua?
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Create file resolver working at front-end and back-end without error treatment
      file: FileUpload!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Criado o module files e a resolver create File
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======
=======
      file: FileUpload!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
>>>>>>> Corrigido erro de cors pra qualquer request
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
=======
>>>>>>> Back-End Review
=======
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
=======
=======
      file: FileUpload!
>>>>>>> Create file resolver working at front-end and back-end without error treatment
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
=======
=======
      file: FileUpload!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
=======
      sourceLanguage: String!
      projectId: ID!
>>>>>>> Corrigido erro de cors pra qualquer request
    ): File!
  }

  extend type Query {
    listFiles(projectId: ID!): [File]
  }
`;
<<<<<<< HEAD
>>>>>>> Criado o module files e a resolver create File
=======

// Acho que o progress pode ser colocado no futuro, pois ele vai ser mais complexo que isso, progress de translation para qual lingua?
>>>>>>> changes
=======
=======
=======
>>>>>>> Criado o module files e a resolver create File
      file: FileUpload!
<<<<<<< HEAD
>>>>>>> Create file resolver working at front-end and back-end without error treatment
=======
      sourceLanguage: String!
      projectId: ID!
<<<<<<< HEAD
>>>>>>> Corrigido erro de cors pra qualquer request
=======
=======
      filename: String!, 
      id: ID!, 
      extesion: String!, 
      source_language: String!
>>>>>>> Criado o module files e a resolver create File
>>>>>>> Criado o module files e a resolver create File
    ): File!
  }
`;
>>>>>>> Criado o module files e a resolver create File
