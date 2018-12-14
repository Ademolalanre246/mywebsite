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
  res.sendFile(path.resolve(__dirname, 'pages/portfolio.html'))
})

app.listen(port, console.log("Demola.com is now running on " + port));