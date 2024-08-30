const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'foundandlost',
  user: 'root',
  password: 'Root@123'
})

connection.connect(function (error) {
  if (error) {
    switch (error.code) {
      case 'ER_ACCESS_DENIED_ERROR':
        console.error(
          'Invalid credentials. Please check your username and password.'
        )
        break
      case 'ER_BAD_DB_ERROR':
        console.error(
          'Database does not exist. Please verify the database name.'
        )
        break
      case 'ENOTFOUND':
        console.error('Host not found. Please check your database host.')
        break
      case 'ECONNREFUSED':
        console.error(
          'Connection refused. Ensure your MySQL server is running.'
        )
        break
      default:
        console.error('Database connection failed: ', error.message)
    }
  } else {
    console.log('MySQL Database is connected successfully')
  }
})

module.exports = connection
