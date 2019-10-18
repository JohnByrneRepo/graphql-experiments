

![alt text](https://graphql.org/img/logo.svg)

# GraphQL experiments

Experimenting with fullstack JavaScript using GraphQL, including `graphql-js`, `graphql-playground`, `graphql-tag`, `graphql-yoga` and `react`.

See the following useful links for reference

- https://graphql.org/code/#javascript

- https://github.com/graphql/graphql-js/tree/master/docs

- https://github.com/graphql/graphql-js/

- https://github.com/prisma-labs/graphql-playground

- https://github.com/apollographql/graphql-tag

- https://github.com/prisma-labs/graphql-yoga

## GraphQL

From the GraphQL website:

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## GraphQL Playground

GraphQL IDE for better development workflows (GraphQL Subscriptions, interactive docs & collaboration)

GraphQL Tag
-----------

Helpful utilities for parsing GraphQL queries. Includes:

`gql` A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
`loader` A webpack loader to preprocess queries

graphql-tag uses the reference graphql library under the hood as a peer dependency so in addition to installing this module, you'll also have to install graphql-js.

GraphQL Yoga
------------

🧘 Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience



# Experiments

*01-graph-ql* - The example Query taken from the JavaScript section of the GraphQL website as listed above, using `graphql-js`

*02-graphql-playground* - An example of using `graphql-playground` to test a query in the browser, including the autocompletion and syntax highlighting that it provides

*03-graphql-express* - A GraphQL server using `express`, and `express-graphql`

*04-graphql-tag* - An example of using `graphql-tag` using the gql tag

*05-graph-ql-yoga* - The example Query taken from the `graphql-yoga` github readme, to show how a basic server can be constructed using this add-on library



### Running the examples

To run the experiments, ensure that `node` is installed then in the terminal/command line:

```bash
node 01-graph-ql.js // runs the first example
```



To-do:

*06-graphql-schemas* - An analysis of what is a schema in GraphQL terminology and an example of validating a schema using GraphQL's validation methods

*07-graphql-type-definitions* - An analysis of GraphQl types, including `scalar`, `object`, `interface`, `union`, `enum`, `input object`, `list` and `non-null` types 

*08-graphql-scalars* - Examples of how scalar types are used in GraphQL, including 
`GraphQLFloat`, `GraphQLString`, `GraphQLBooleanand` and `GraphQLID`
