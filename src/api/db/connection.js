import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

console.log('mode...', process.env.NODE_ENV)
console.log('db_name...', process.env.DB_NAME)

const connection = async () => {
  return await mysql.createConnection({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
  })
}

export default connection
