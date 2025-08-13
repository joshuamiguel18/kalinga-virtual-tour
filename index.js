// app.js
const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const { destinations, tours } = require('./public/js/data')

app.use(express.static(path.join(__dirname + '/public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.json()); 
//app.use(express.urlencoded({ extended: true })); 

app.set('views', path.join(__dirname, '/views'))



// Define the route
app.get('/', (req, res) => {
  res.render('index', {
    destinations: destinations.slice(0, 3),
    tours: tours.slice(0, 3)
  });
});

app.get('/all-destinations', (req, res) => {
  res.render('all-destinations', {
    tours: tours
  });
});
app.get('/full-details', (req, res) => {
  res.render('spot-details', {
    spot: tours[0]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
