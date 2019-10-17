GraphQL experiments
-------------------

Experimenting with fullstack GraphQL, including `graphql-js`, `graphql-tag` and `graphql-yoga`.

See the following useful links for reference

https://graphql.org/code/#javascript
https://github.com/graphql/graphql-js/tree/master/docs
https://github.com/graphql/graphql-js/
https://github.com/apollographql/graphql-tag#readme
https://github.com/prisma-labs/graphql-yoga

GraphQL
-------

From the GraphQL website:

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

GraphQL Tag
-----------

Helpful utilities for parsing GraphQL queries. Includes:

`gql` A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
`loader` A webpack loader to preprocess queries

graphql-tag uses the reference graphql library under the hood as a peer dependency so in addition to installing this module, you'll also have to install graphql-js.


GraphQL Yoga
------------

🧘 Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience


Introductory Experiments
------------------------

01-introductory-experiments
02-graphql-api
03-graphql-tutorials

See the experiments folder for the following examples.

*01-1-graph-ql* - The example Query taken from the JavaScript section of the GraphQL website as listed above.

*01-2-graphql-playground* - An example of using GraphQL playground to test a query in the browser, including the autocompletion and syntax highlighting that it provides

*01-3-graphql-tags* - An example of using the `gql` tag

*01-4-graph-ql-yoga* - The example Query taken from the `graphql-yoga` github readme, to show how a basic server can be constructed using this add-on library

To-do:

*02-1-graphql-schemas* - An analysis of what is a schema in GraphQL terminology and an example of validating a schema using GraphQL's validation methods

*02-2-graphql-type-definitions* - An analysis of GraphQl types, including scalar, object, interface, union, enum, input object, list and non-null types 

*02-3-graphql-scalars* - Examples of how scalar types are used in GraphQL, including 
`GraphQLFloat`, `GraphQLString`, `GraphQLBooleanand` and `GraphQLID`



