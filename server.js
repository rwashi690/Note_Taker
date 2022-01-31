const express = require('express');
const path = require('path');
const html_routes = require('./routes/html_routes')
const api_routes=require('./routes/api_routes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(express.static('public'));
app.use('/api', api_routes)
app.use('/', html_routes)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
