const env = process.env.NODE_ENV || 'development'

export default {
  [env]: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialec: 'mariadb',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
}
