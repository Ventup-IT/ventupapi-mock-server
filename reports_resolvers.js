const { makeExecutableSchema } = require('@graphql-tools/schema');
const { find, filter } = require('lodash');

const resolvers = {
    RootQueryType: {
        monthlyPurchases: () => {},
        monthlyPendingToPayPurchases: () => {},
        monthlyPurchasesByProvider: () => {},
        weeklyPurchases: () => {},
        monthlyPurchasedProductsByCategories: () => {},
        topTenMostRecentActivePurchases: () => {},
        purchasesToBePaid: () => {},
        purchasesByUser: () => {},
        purchaseOperations: () => {},
        purchaseStats: () => {},
        prices: () => {},
        purchaseRatings: () => {},
        lastSixMonthsPurchaseCount: () => {},
        lastSixMonthsPurchaseTotal: () => {},
        monthlyPurchaseCategories: () => {},
        topTenSolicitedPurchasedProducts: () => {},
        topTenExpensivePurchasedProducts: () => {},
        enqueueDownloadPurchases: () => {},
        monthlySales: () => {},
        monthlyPendingToSettleSales: () => {},
        monthlySalesByClient: () => {},
        weeklySales: () => {},
        monthlySoldProductsByCategories: () => {},
        topTenMostRecentActiveSales: () => {},
        salesToBeSettled: () => {},
        saleFinances: () => {},
        saleOperations: () => {},
        saleStats: () => {},
        saleRatings: () => {},
        lastSixMonthsSaleCount: () => {},
        lastSixMonthsSaleTotal: () => {},
        monthlySaleCategories: () => {},
        topTenSolicitedSoldProducts: () => {},
        topTenExpensiveSoldProducts: () => {},
        enqueueDownloadSales: () => {},
    },
};

module.exports = resolvers;
