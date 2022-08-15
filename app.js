const { application } = require('express');
const express = require('express');
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.post('/newUser', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/newUser.html'));
});

app.post('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});
