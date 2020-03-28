module.exports = () => {
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
  })

  connection.connect()
  const createDB = 'create database meetup;'
  connection.query(createDB, function (error, results, fields) {
    if (error) {
      throw error
    }
    console.log('the reply is ', results[0])
  })

  connection.end()
}
