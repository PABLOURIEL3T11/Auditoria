const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,  // Número máximo de conexiones concurrentes
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

pool.query(query, (err, result) => {
    if (err) {
        console.error('Query error:', err);
    } else {
        console.log(result);
    }
});
