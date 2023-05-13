

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: false  }));




const adminRoutes = require('./routes/admin');



app.use(express.json()); // for parsing application/
app.use(adminRoutes);




  












    
    app.listen(3000);
    



