const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => res.send("test"));
app.get('/longer', function(req, res) {
    res.send("longer example");
});
app.get('/', function(req, res) {
    res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</submit></form>');
});

app.post('/store-user', function(req, res) {
    //request.body of request.fields of the body
    const userName = req.body.username;
    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    existingUsers.push(userName);
    fs.writeFileSync(filePath, JSON.stringify(existingUsers));
    
    res.send(`<h1>${userName}</h1>`);
});

app.listen(3000);