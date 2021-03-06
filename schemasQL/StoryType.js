'use strict';

const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const storyType = new GraphQLObjectType({
  name: 'storyType',
  description: 'represent a story value',
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    created_at: { type: GraphQLString },
    category: { type: categoryType },
    created_by: { type: userType },
    base: { type: baseQuery }
  })
});

module.exports = storyType;
