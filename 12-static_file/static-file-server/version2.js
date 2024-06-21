const express = require('express');
const path = require('path');
const fs = require('fs');

const morgan = require('morgan');


const app = express();


app.use(morgan('short'));

const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.listen(3000, () => console.log('server on port 3000'));
