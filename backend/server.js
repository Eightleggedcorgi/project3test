// DEPENDENCIES
require('dotenv').config();
const { PORT } = process.env;
const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const routes = require('./routes/index.js')

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(methodOverride('_method'));

// ROUTES
app.use('/', routes)
app.use((req, res) => {res.status(404).json({message: 'EMPTY ROUTE, TRY ANOTHER'})})

// LISTENER
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));