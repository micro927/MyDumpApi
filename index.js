var express = require('express')
// var axios = require('axios').default;
var cors = require('cors');
var app = express()
var port = 3099

app.use(cors('*'))

app.get('/', (req, res) => {
    // console.log(req);
    res.send('Hello World!')
})

app.get('/football/leagues', (req, res) => {
    const leagues = JSON.parse(require("fs").readFileSync("./football/Leagues.json", "utf8"))
    if (req) {
        console.log('request football leagues');
    }
    res.json(leagues)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})