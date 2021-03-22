const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const port = Number(process.env.PORT)
console.log('port...', port)

const expensesRouter = require('./src/routes/expenses')

app.use('/expenses', expensesRouter)

app.listen(port, () => {
  console.log(`🚀Waiting for requests at http://localhost:${port}`)
})

module.exports = app
