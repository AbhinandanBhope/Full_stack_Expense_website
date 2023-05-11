

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const adminRoutes = require('./routes/admin');
/*db.execute('SELECT * FROM users').
then(result => {
  console.log(result);
  
}).catch(err => {
  console.log(err);
  
}); */



app.use(adminRoutes);
app.use(express.json()); // for parsing application/

  










app.use(bodyParser.urlencoded({ extended: false  }));





    
    app.listen(3000);
    



