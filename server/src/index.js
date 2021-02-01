const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/Component/Home').default;

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
