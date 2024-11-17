const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(express.json());

app.get('/getUsers', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Query error');
            return;
        }
        res.json(results);
    });
});

app.get('/getOrders', (req, res) => {
    const query = 'SELECT * FROM orders WHERE user_id = 1';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Query error');
            return;
        }

        const orderDetails = results.map(order => {
            return order.product_name;
        });
        res.json(orderDetails);
    });
});

app.post('/addUser', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Missing parameters');
    }

    const query = `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`;
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error adding user:', err);
            res.status(500).send('Error adding user');
            return;
        }
        res.status(201).send('User added');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
