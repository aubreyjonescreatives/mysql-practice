const express = require('express');

const mysql = require('mysql2'); 

const MYSQLP = process.env.MYSQL_PASSWORD; 

const PORT = process.env.PORT || 5000; 
const app = express(); 



const dbConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root', 
        password: `${MYSQLP}`, 
        database: 'ecommerce_db'
    },
    console.log(`We're successfully connected to the ecommerce_db database!!!`)
)



app.use((req, res) => {
    res.status(404).end(); 
}); 



app.listen(PORT, () => {
    console.log(`Server now listening with port ${PORT}`); 
});