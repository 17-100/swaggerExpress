const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');



app.get('/', (req, res) => {
	res.send('Hello World!');	
});

var PORT = 3000;
app.listen(PORT, () => {
	console.log("Running smoothly on PORT:3000");
});
