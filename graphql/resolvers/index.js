const postResolvers = require('./posts.js');
const userResolvers = require('./users.js');

module.exports = {
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation
    }
};