//import
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
//end

const app = express();

//graphql end point
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server is running on port : ${port}`);
});
