const types = `
schema {
  query: RootQueryType
  mutation: RootMutationType
}

type Session {
  token: String
}

type RootMutationType {
  logOut: Response
}

type RootQueryType {
  logIn(email: String!, password: String!): Session
  resetPassword(email: String!): Response
  setPassword(email: String!, token: String!, password: String!): Response
}

type Response {
  message: String
}
`;

module.exports = types;
