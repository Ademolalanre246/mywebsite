const express = require('express');
const path = require('path');
const port = process.env.PORT || 9000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('/index', (req, res) => {
  console.log("Request to index");
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/portfolio', (req, res) => {
  console.log("Request to portfolio");
  res.sendFile(path.resolve(__dirname, 'pages/portfolio.html'));
});

app.get('/about', (req, res) => {
  console.log("request to about");
  res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/blog',(req, res)  => {
  console.log("request to blog");
  res.sendFile(path.resolve(__dirname, 'pages/blog.html'));
});

app.get('/contact',(req, res) => {
  console.log("request to contact");
  res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});
app.listen(port, console.log("Demola.com is now running on " + port));