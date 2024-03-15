const path = require('path');
const fs = require('fs');

const express = require('express');

const app = express();
// where we will find our files, 'views' is the folder name
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'index.html');
  // res.sendFile(htmlFilePath);
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
  // res.sendFile(htmlFilePath);
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  res.render('restaurants', {numberOfRestaurants: storedRestaurants.length,
                              restaurants: storedRestaurants})
});


app.get('/recommend', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
  // res.sendFile(htmlFilePath);
  res.render('recommend');
});

app.post('/recommend', function(req, res) {
    const restaurant = req.body;
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
    res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
  // res.sendFile(htmlFilePath);
  res.render('confirm');
});

app.get('/about', function (req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'about.html');
  // res.sendFile(htmlFilePath);
  res.render('about');
});

app.listen(3000);
