import express from 'express';

import mysql from 'mysql2'; 
import * as dotenv from 'dotenv'; 




dotenv.config()

const MYSQLP = process.env.MYSQL_PASSWORD; 

const PORT = process.env.PORT || 5000; 
const app = express(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const dbConnection = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root', 
//         password: `${MYSQLP}`, 
//         database: 'ecommerce_db'
//     },
//     console.log(`We're successfully connected to the ecommerce_db database!!!`)
// );



app.use((req, res) => {
    res.status(404).end(); 
}); 



app.listen(PORT, () => {
    console.log(`Server now listening with port ${PORT}`); 
});