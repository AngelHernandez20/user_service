import mysql from 'mysql';
import 'dotenv/config';

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_DB
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default conn;