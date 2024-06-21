const express = require('express');

const app = express();

app.set('case sensitive routing', true);
app.set('port', 3000);

app.get('/Users', (req, res) => {
  res.send('Important users');
});

app.get('/users', (req, res) => {
  res.send('tipical users');
});

app.listen(3000);
console.log(`Server on port ${app.get('port')}`);
