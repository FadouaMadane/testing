// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const projectData = {};

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = 8081;
const server = app.listen(port, () => {console.log(`Server is running on local host: ${port}`)});
console.log(server);

app.get('/', (req, res) => {
    res.status(200).send('./dist/index.html')
})

module.exports = app;