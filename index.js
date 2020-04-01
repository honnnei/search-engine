const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
/* 
app.get('/results', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/Xresults.html'));
});

app.get('/luckyresult', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/lucky_result.html'));
});

app.get('/results?search=', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/lucky_result.html'));
});

app.get('/results?lucky=', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/lucky_result.html'));
}); */

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});