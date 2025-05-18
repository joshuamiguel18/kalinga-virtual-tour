// app.js
const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


app.use(express.static(path.join(__dirname + '/public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.json()); 
//app.use(express.urlencoded({ extended: true })); 

app.set('views', path.join(__dirname, '/views'))



// Define the route
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/all-destinations', (req, res) => {
  res.render('all-destinations');
});
app.get('/full-details', (req, res) => {
  res.render('spot-details');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
