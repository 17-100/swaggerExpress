const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//Data Parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuring Swagger
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Library API',
			version: '1.0.0'
		}
	},
	apis: ['app.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//Pass the Configuration into Express
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//Route 1
app.get('/', (req, res) => {
	res.send('Hello World!');	
});

// Route 2
/**
 * @swagger
 * /books:
 *      get:
 *          description: Get all books
 *          responses:
 *              200:
 *                  description: Success
 */
app.get('/books', (req, res) => {
	res.send([
		{
			isbn: '9781781100486',
			title: 'Harry Potter and the Sorcerer\'s Stone',
			author: 'J.K. Rowling',
			publisher: 'Scholastic'
		}
	]);
});

// Route 3 - Post route
/**
 * @swagger
 * /book:
 *      post:
 *          description: Get one book
 *          parameters:
 *          -   name: title
 *              description: Book title
 *              in: body
 *              required: true
 *              type: string
 *          responses:
 *              200:
 *                  description: Success
 */
app.post('/book', (req, res) => {
    const title = req.body.title;
    res.send({title});
});

var PORT = 3000;
app.listen(PORT, () => {
	console.log("Running smoothly on PORT:3000");
});
