const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Up Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/appController.js');

app.use(routes);

app.listen(PORT, () => console.log(`App vibing at localhost:${PORT}`));