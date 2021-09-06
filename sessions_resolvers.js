const { makeExecutableSchema } = require('@graphql-tools/schema');
const { find, filter } = require('lodash');

const users = [
    {
        id: "35be0b10-aa59-45de-8003-d4157ec7082b",
        email: 'director@ventup.com.mx',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcmVzX2F0IjoxNjEwNjczODAwLCJleHBpcmVzIjp0cnVlfQ.OpHncq6nIp_jUP1JfJUmLLSTpmhDRPlTfuseRiS-jzA'
    },
    {
        id: "e998c033-1a05-4dfb-8e95-b812a9f4ec26",
        email: 'gerente@ventup.com.mx',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHBpcmVzX2F0IjoxNjEwNjczODAwLCJleHBpcmVzIjp0cnVlfQ.EaYunf0xuGB69xgIdjjrg-kR64ht6fgToWoedcu7qsU'
    },
    {
        id: "22eb6d6d-4c51-4d18-ac5f-cca09ae4d09a",
        email: 'administracion',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHBpcmVzX2F0IjoxNjEwNjczODAwLCJleHBpcmVzIjp0cnVlfQ.MMw7uUIN4-cY2X_hnA5thwn4SdK-tbCif020p7Uu-ro'
    },
    {
        id: "d61e21e0-a21a-46c5-908b-c15bc600b963",
        email: 'operaciones@ventup.com.mx',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJleHBpcmVzX2F0IjoxNjEwNjczODAwLCJleHBpcmVzIjp0cnVlfQ.XQMzb-isKxHn0n6tNaj1lQIBat4ZiRFLNnbu9vUtauM'
    },
];

const resolvers = {
    RootQueryType: {
        logIn: (_, {email, password}) => find(users, { email }),
        resetPassword: () => {},
        setPassword: () => {},
    },
    RootMutationType: {
        logOut: () => {},
    },
};

module.exports = resolvers;
