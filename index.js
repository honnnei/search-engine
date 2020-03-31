const express = require('express');
const app = express();
// const axios = require("axios");
const PORT = process.env.PORT || 3000;
const path = require('path');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// global.document = new JSDOM("index.html").window.document;

app.use(express.static('public'));
app.use(express.static('views'));
// app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/results', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/results.html'));
});

app.get('/luckyresult', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/lucky_result.html'));
});

app.get('/results?search=', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/lucky_result.html'));
});

app.get('/results?lucky=', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/lucky_result.html'));
});


// function topTenResults() {
//     console.log('top ten');
// }

// function luckyResult() {
//     console.log('lucky');
// }


// document.getElementById("topTenResults").addEventListener(click, topTenResults);
// document.getElementById("luckyResult").addEventListener(click, luckyResult);


// // function getResults(query) {
// //     axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBZSy_eMGwVqsKZzHBPvIiBz-HBFmK8Uxo&cx=006369568077011760523:re8fjbecuqp&q=${query}`)
// //     .then(res => console.log(res))
//     .catch(err => console.error(err));
// }

// getResults("paris");


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});