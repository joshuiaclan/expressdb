const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'password',
    database: 'expressdb'
});

conn.connect((err)=>{
    if(err){ throw err;}
    console.log('Connected to db!')
});

let db = {
    getAll: () => {
        return new Promise( (resolve, reject) => {
            const sql = "SELECT * FROM test_table";
            conn.query(sql, (err, result) => {
                if(err) { return reject(err);}
                return resolve(result);
            })
        });
    },
    getOne: (id) => {
        return new Promise( (resolve, reject) => {
            const sql = `SELECT * FROM test_table WHERE id = ${id}`;
            conn.query(sql, (err, result) => {
                if(err) { return reject(err);}
                return resolve(result);
            })
        });
    }
}

module.exports = db;