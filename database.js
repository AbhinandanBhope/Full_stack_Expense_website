const Sequelize = require('sequelize');
 const sequelize =new Sequelize('expenseapp','root','Abhi@123',{dialect:'mysql', host:'localhost'
});
module.exports =sequelize;