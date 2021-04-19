const dotenv = require('dotenv')
dotenv.config()

const env = process.env.NODE_ENV || 'development'

module.exports = {
  [env]: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  },
}
