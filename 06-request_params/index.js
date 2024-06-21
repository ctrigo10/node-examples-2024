const express = require('express');
const app = express();

app.get('/hello/:user', (req, res) => {
  res.end('Hello ' + req.params.user + '.');
});


app.get('/add/:userId', (req, res) => {
  let userId = parseInt(req.params.userId, 10);
  userId++;
  console.log(userId);
  res.send('Your user Id + 1 is: ' + userId);
});

app.get('/users/:username/photo', (req, res) => {
  if (req.params.username === 'fazt') {
    res.setHeader('nickname', req.params.username);
    return res.sendFile('./fazt-logo.jpg', { root: __dirname });
  }
  res.end('User not found');
});

app.listen(3000);
console.log('Server on port ', 3000);
