// usersController.js

const path = require('path');
const db = require('../database');

const getUsers = (req, res) => {
  db.execute('SELECT * FROM expense')
    .then((result) => {
      const rows = result[0]; // Get the result rows

      // Send the rows data to the list.html view
      res.render('list', { rows });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An error occurred');
    });
};

const deleteUser = (req, res) => {
  const id = req.params.Id;
  db.execute('DELETE FROM expense WHERE Id = ?', [id])
    .then((result) => {
      res.sendFile(path.join(__dirname, '../views/index.html'));
    })
    .catch((err) => {
      console.log(err);
    });
};

const addUser = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
};

const postUser = (req, res) => {
  const { title, price } = req.body; // Destructure the title and price from req.body

  db.execute('INSERT INTO expense (title, price) VALUES (?, ?)', [title, price])
    .then((result) => {
      res.redirect('/list');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('An error occurred');
    });
};


module.exports = { getUsers, deleteUser, addUser, postUser };

  