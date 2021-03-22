const express = require('express')
const app = express()
const port = 3000

const expensesRouter = require('./src/routes/expenses')

app.use('/expenses', expensesRouter)

app.listen(port, () => {
  console.log(`🚀Waiting for requests at http://localhost:${port}`)
})

module.exports = app
