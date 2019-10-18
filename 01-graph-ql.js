var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var requestString = `{
    hello
}`;

var root = { hello: () => 'Hello world!' };

graphql(schema, requestString, root).then((response) => {
  console.log(response);

  // Outputs:

  // {
  //  "data": {
  //    "hello": "Hello world!"
  //  }
  // }
});

