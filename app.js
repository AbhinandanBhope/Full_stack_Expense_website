

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./database');
const app = express();
app.use(express.json()); 
const User = require('./User');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false  }));




const adminRoutes = require('../Add Product website/routes/admin');
app.use(adminRoutes);









  


sequelize.sync().then((result) => {

  console.log(result)


   app.listen(4000);
}).catch((err) => {
  console.log(err)
  
});














    
    
    



