import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const connection = async () => {
  return await mysql.createConnection({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
  })
}

export default connection
