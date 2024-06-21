const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
  res.json({ mensaje: 'jwt' });
});

app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    nombre: 'Carlos',
    email: 'carlos@gmail.com',
  };

  jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
    res.json({
      token,
    });
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  res.json({ mensaje: 'Post fue creado', usuario: req.usuario });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];
    jwt.verify(token, 'secretkey', (error, usuario) => {
      if (error) res.sendStatus(403);
      else {
        req.usuario = usuario;
        next();
      }
    });
  } else res.sendStatus(403);
}

app.listen(3000, function () {
  console.log('listening on port 3000');
});
