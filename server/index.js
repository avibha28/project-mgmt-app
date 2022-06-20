const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const colors = require('colors')
require('dotenv').config()
const schema = require('./schema/schema')
const port = process.env.PORT || 5000;
const connectDb = require('./config/db')

//Construct a schema, using GraphQL schema language


// The root provides a resolver function for each API endpoint
//connect to mongodb

// const root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

const app = express();
connectDb()
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));
app.listen(port, console.log(`app is listening on http://localhost:${port}/graphql`))

