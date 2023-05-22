const  Sequelize  = require('sequelize');
const sequelize = require('./database');
const PRODUCT = sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    Name:Sequelize.STRING,
    
    price:{
        type:Sequelize.DOUBLE,
        allowNull:true

    },
    quantity:{
        type:Sequelize.DOUBLE,
        allowNull:true

    }
    

    
    
    
});
module.exports = PRODUCT;