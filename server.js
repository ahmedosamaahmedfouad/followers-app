
const express = require('express');
const app = express();

//hosting the dist folder
app.use(express.static(__dirname + '/dist'));

//api endpoints goes here...


//catching all invalid routes for sloving the same problem we had when deploying 
//our app to firebase this happens when we try to refresh the followers page
app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

//use defualt port 80 or if it not supplied we use 8080
app.listen(process.env.PORT || 8080);