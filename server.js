const express = require('express')
const app = express()
const port = 3000

var path = require('path');



app.use('/static', express.static(path.join(__dirname, 'public')))

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test_koru.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/test_koru.html'));
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))