const express = require('express');
const port = 8081;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const db = require('./db')
const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'pirates',
    password: 'password',
    port: '5432',
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"../client/public")));




app.get('/:id', (req,res) => {
    var queryStr = "SELECT * FROM items WHERE name LIKE $1 LIMIT 10";
    var queryParams = ["%" + req.params.id + "%"];

    pool.query(queryStr, queryParams, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result.rows)
        }
    })
})

app.listen( port, () => {
    console.log(`the doggos are listening on port ${port}...`)
});
