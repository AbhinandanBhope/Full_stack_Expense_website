

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const fs = require("fs");
const db = require('../database');



const router = express.Router();
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true })); 

router.get('/list', (req, res) => {
  db.execute('SELECT * FROM users')
    .then((result) => {
      const rows = result[0]; // Get the result rows

      // Send the rows data to the list.html view
      res.render('list', { rows });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An error occurred');
    });
});
router.get('/delete/:Id', (req, res) => {
  const id = req.params.Id;
  db.execute('DELETE FROM users WHERE Id = ?', [id])
    .then((result) => {
      res.sendFile(path.join(__dirname, '../views/index.html'));
     
    })
    .catch(err => {
      console.log(err);
    });
   
});





  router.get('/addUser',(req ,res) =>{
    res.sendFile(path.join(__dirname,'../views/index.html'));
  }
  )
  router.post("/", function(req, res) {
    const id =2;
    const Name1 = req.body.Name;
    const phone1 = req.body.Phone;
    const gmail1 = req.body.Gmail;
     db.execute('INSERT INTO users (  Phone, Name ,gmail)VALUES( ?, ?, ?)',
    [  phone1, Name1, gmail1]
    ).then((result) => {
      res.redirect('/list');
      
    }).catch(err => {
      res.sendFile(path.join(__dirname,'../h1.html'))

      console.log(err)});
    
    
   /* fs.appendFile("./customer.json", JSON.stringify({ Name: Name1,phone:phone1 ,gmail:gmail1}) + "\n", "utf8", (err) => {
        if (err) {
          console.log("File append failed:", err);
          res.status(500).send("Error occurred while appending data");
          res.redirect('/list');
          return;
        }
        console.log("Data appended to file successfully");
         */
        

      });
      
      
    
    
     
    
  
    
    
      
    
    

  module.exports = router;