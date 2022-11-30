import mysql from 'mysql';

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'jobservices',
    port: 3306
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default conn;