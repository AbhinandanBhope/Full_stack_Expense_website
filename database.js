const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'bookingapp',
    password:'Abhi@123'

});
module.exports =pool.promise();