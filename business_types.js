const types = `
scalar Upload

type Pagination {
  totalCount: Int
}

type Company {
  id: ID
  name: String
  logo: String
  taxData: CompanyTaxData
  bank: String
  holder: String
  account: String
  interbankKey: String
  branches: [Branch]
  users: [User]
  branchesCount: Int
  usersCount: Int
  providersCount: Int
  clientsCount: Int
}

type RootMutationType {
  createBranch(name: String!, address: NewAddressInput!, taxData: NewTaxDataInput!): Branch
  updateBranch(id: ID!, name: String, taxData: TaxDataInput, address: AddressInput): Branch
  activateBranch(id: ID!): Branch
  deactivateBranch(id: ID!): Branch
  deleteBranch(id: ID!): Branch
  bulkUpdateBranches(branchIds: [ID!], action: String!): [Branch]
  updateCompany(name: String, logo: Upload, bank: String, holder: String, account: String, interbankKey: String, taxData: CompanyTaxDataInput, address: AddressInput): Company
  createUser(name: String!, email: String!, role: String!, contact: ContactInput!, branchIds: [ID]): User
  updateUser(id: ID!, name: String, email: String, role: String, branchIds: [ID], contact: ContactInput): User
  activateUser(id: ID!): User
  deactivateUser(id: ID!): User
  deleteUser(id: ID!): User
  bulkUpdateUsers(userIds: [ID!], action: String!): [User]
}

type RootQueryType {
  branches(limit: Int, offset: Int, filterBy: String): Branches
  branch(id: ID!): Branch
  clients: [Company]
  company: Company
  providers: [Company]
  users(limit: Int, offset: Int, filterBy: String): Users
  user(id: ID!): User
}

type Branch {
  legacyId: Int
  id: ID
  name: String
  status: String
  main: Boolean
  ordersCount: Int
  usersCount: Int
  address: Address
  taxData: TaxData
  users: [User]
}

input AddressInput {
  id: ID!
  city: String
  country: String
  extNumber: String
  intNumber: String
  neighborhood: String
  state: String
  street: String
  zipcode: String
}

type Users {
  users: [User]
  pagination: Pagination
}

type Branches {
  branches: [Branch]
  pagination: Pagination
}

input TaxDataInput {
  id: ID!
  name: String
  type: String
  rfc: String
  email: String
  telephone: String
  pathCer: Upload
  pathKey: Upload
  password: String
  address: AddressInput
}

input NewTaxDataInput {
  name: String
  type: String
  rfc: String
  email: String
  telephone: String
  pathCer: Upload
  pathKey: Upload
  password: String
  address: NewAddressInput
}

type Contact {
  id: ID
  name: String
  operator: Boolean
  comments: String
  telephone: String
  position: String
}

input NewAddressInput {
  city: String
  country: String
  extNumber: String
  intNumber: String
  neighborhood: String
  state: String
  street: String
  zipcode: String
}

input CompanyTaxDataInput {
  email: String
  phone: String
  taxId: String!
  legalName: String
}

input ContactInput {
  id: ID
  name: String
  operator: Boolean
  comments: String
  telephone: String
  position: String
}

type Address {
  id: ID
  city: String
  country: String
  extNumber: String
  intNumber: String
  neighborhood: String
  state: String
  street: String
  zipcode: String
}

type User {
  id: ID
  name: String
  role: String
  email: String
  state: String
  contact: Contact
  branchList: String
  ordersCount: Int
}

type CompanyTaxData {
  email: String
  phone: String
  taxId: String
  legalName: String
}

type TaxData {
  id: ID
  name: String
  type: String
  rfc: String
  email: String
  telephone: String
  pathCer: String
  pathKey: String
  address: Address
  branch: Branch
}

schema {
  query: RootQueryType
  mutation: RootMutationType
}
`;

module.exports = types;
