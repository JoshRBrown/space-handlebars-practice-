const express = require('express');
const app = express();
const fs = require('fs');
const spacedata = require('./spacedata');
const static = express.static;
const expressHbs = require('express-handlebars');


app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(static('public'));



app.get('/', (req, res) => {
    res.render('home', {
        Welcome:'Welcome to the universe',
        Instructions:'Click below to explore the space around Earth',
        link: 'Click me!' 
    })
})
app.get('/images', (reg, res) => {
    res.render('images', {
        points: spacedata,
        home: '/'
    })
})


app.listen(5000, () => {
    console.log('Someones here');
})
