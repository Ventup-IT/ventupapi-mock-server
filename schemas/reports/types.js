const types = `
scalar Decimal
scalar DateTime

type Pagination {
  totalCount: Int
}

type Item {
  id: String
  data: [Coords]
}

type SaleRating {
  clientName: String
  oneStar: Int
  twoStar: Int
  threeStar: Int
  fourStar: Int
  fiveStar: Int
  lastOrderDate: DateTime
  rating: Decimal
  count: Int
}

type PurchaseRating {
  lastOrderDate: DateTime
  rating: Decimal
  count: Int
  providerName: String
  oneStar: Int
  twoStar: Int
  threeStar: Int
  fourStar: Int
  fiveStar: Int
}

type RecentActiveSales {
  solicited: Int
  confirmed: Int
  inProgress: Int
  lpe: Int
  inRoute: Int
  active: Int
  sales: [Order]
}

type Coords {
  x: String
  y: Int
}

type SaleFinances {
  sales: [Order]
  total: Indicator
  totalToBeSettled: Indicator
  totalSettled: Indicator
  totalCanceled: Indicator
  pagination: Pagination
}

type RecentActivePurchases {
  solicited: Int
  confirmed: Int
  inProgress: Int
  lpe: Int
  inRoute: Int
  active: Int
  purchases: [Order]
}

type IntegerBar {
  key: DateTime
  value: Int
  label: String
}

type RootSubscriptionType {
  "Subscribe to report updates"
  reportUpdate: ReportUpdate
}

type IntegerBarChart {
  keys: [String]
  data: [IntegerBar]
}

type PurchaseOperations {
  indicators: PurchaseOperationsIndicators
  purchases: [Order]
  pagination: Pagination
}

type ProductStats {
  providerName: String
  productName: String
  minPrice: Decimal
  maxPrice: Decimal
  variation: Decimal
}

type MonthlyOrders {
  lastMonth: Indicator
  currentMonth: Indicator
}

type Indicator {
  total: Decimal
  count: Int
}

type RootQueryType {
  monthlyPurchases: MonthlyOrders
  monthlyPendingToPayPurchases: MonthlyOrders
  monthlyPurchasesByProvider: [PieDatum]
  weeklyPurchases: DecimalBarChart
  monthlyPurchasedProductsByCategories: [PieDatum]
  topTenMostRecentActivePurchases: RecentActivePurchases
  purchasesToBePaid(branchId: ID, providerId: ID, providerBranchId: ID, from: DateTime, limit: Int, offset: Int): PurchasesToBePaid
  purchasesByUser(limit: Int, offset: Int): PurchasesByUser
  purchaseOperations(branchId: ID, providerBranchId: ID, from: DateTime, to: DateTime, limit: Int, offset: Int): PurchaseOperations
  purchaseStats(limit: Int, offset: Int): PurchaseStats
  prices(from: DateTime!, limit: Int, offset: Int): Prices
  purchaseRatings(limit: Int, offset: Int): PurchaseRatings
  lastSixMonthsPurchaseCount(providerId: ID!): IntegerBarChart
  lastSixMonthsPurchaseTotal(providerId: ID!): DecimalBarChart
  monthlyPurchaseCategories(providerId: ID): MonthlyCategories
  topTenSolicitedPurchasedProducts(providerId: ID!): [TopTenSolicitedProducts]
  topTenExpensivePurchasedProducts(providerId: ID!): [TopTenExpensiveProducts]
  enqueueDownloadPurchases(branchId: ID, providerBranchId: ID, from: DateTime, type: String!): Response
  monthlySales: MonthlyOrders
  monthlyPendingToSettleSales: MonthlyOrders
  monthlySalesByClient: [PieDatum]
  weeklySales: DecimalBarChart
  monthlySoldProductsByCategories: [PieDatum]
  topTenMostRecentActiveSales: RecentActiveSales
  salesToBeSettled(branchId: ID, clientId: ID, clientBranchId: ID, from: DateTime, limit: Int, offset: Int): SalesToBeSettled
  saleFinances(branchId: ID, clientId: ID, clientBranchId: ID, from: DateTime, to: DateTime, limit: Int, offset: Int): SaleFinances
  saleOperations(branchId: ID, clientBranchId: ID, from: DateTime, to: DateTime, limit: Int, offset: Int): SaleOperations
  saleStats(limit: Int, offset: Int): SaleStats
  saleRatings(limit: Int, offset: Int): SaleRatings
  lastSixMonthsSaleCount(clientId: ID!): IntegerBarChart
  lastSixMonthsSaleTotal(clientId: ID!): DecimalBarChart
  monthlySaleCategories(clientId: ID): MonthlyCategories
  topTenSolicitedSoldProducts(clientId: ID!): [TopTenSolicitedProducts]
  topTenExpensiveSoldProducts(clientId: ID!): [TopTenExpensiveProducts]
  enqueueDownloadSales(branchId: ID, clientBranchId: ID, from: DateTime, type: String!): Response
}

type ReportUpdate {
  url: String
}

type Response {
  message: String
}

type DecimalBarChart {
  keys: [String]
  data: [DecimalBar]
}

type TopTenSolicitedProducts {
  category: String
  product: String
  count: Int
}

type PurchaseOperationsIndicators {
  solicited: Int
  confirmed: Int
  inProgress: Int
  lpe: Int
  inRoute: Int
  delivered: Int
  rated: Int
  cancelled: Int
}

type ClientStats {
  clientBranchName: String
  month: String
  year: String
  total: Decimal
  count: Int
}

type MonthlyCategories {
  data: [Item]
}

type SaleStats {
  stats: [ProviderStats]
  pagination: Pagination
}

type PurchaseFinances {
  purchases: [Order]
  total: Indicator
  totalToBePaid: Indicator
  totalPaid: Indicator
  totalCanceled: Indicator
  pagination: Pagination
}

type PurchaseStats {
  pagination: Pagination
  stats: [ClientStats]
}

type SaleOperations {
  indicators: SaleOperationsIndicators
  sales: [Order]
  pagination: Pagination
}

type PieDatum {
  id: ID
  label: String
  value: Decimal
}

type SalesToBeSettled {
  total: Indicator
  moreThanSevenDays: Indicator
  lastSevenDays: Indicator
  followingSevenDays: Indicator
  resultsDownloadUrl: String
  sales: [Order]
  pagination: Pagination
}

type PurchasesToBePaid {
  purchases: [Order]
  moreThanSevenDays: Indicator
  lastSevenDays: Indicator
  followingSevenDays: Indicator
  pagination: Pagination
}

type Prices {
  pagination: Pagination
  stats: [ProductStats]
}

type SaleOperationsIndicators {
  solicited: Int
  confirmed: Int
  inProgress: Int
  lpe: Int
  inRoute: Int
  delivered: Int
  rated: Int
  cancelled: Int
}

type SaleRatings {
  pagination: Pagination
  ratings: [SaleRating]
}

enum OrderStatus {
  SOLICITED
  CONFIRMED
  IN_PROGRESS
  LPE
  IN_ROUTE
  DELIVERED
  RATED
  CANCELLED
}

type TopTenExpensiveProducts {
  category: String
  product: String
  total: Decimal
}

type ProviderStats {
  providerBranchName: String
  month: String
  year: String
  total: Decimal
  count: Int
}

type PurchaseRatings {
  pagination: Pagination
  ratings: [PurchaseRating]
}

type Order {
  id: ID
  localOrderId: Int
  providerName: String
  providerId: ID
  providerBranchName: String
  clientBranchName: String
  clientName: String
  clientId: ID
  status: OrderStatus
  paid: Boolean
  invoiced: Boolean
  createdAt: DateTime
  expireAt: DateTime
  total: Decimal
  qualification: Int
}

type User {
  name: String
  email: String
  role: String
  count: Int
  total: Decimal
}

type DecimalBar {
  key: DateTime
  value: Decimal
  label: String
}

type PurchasesByUser {
  pagination: Pagination
  users: [User]
}

schema {
  query: RootQueryType
  subscription: RootSubscriptionType
}
`;

module.exports = types;
