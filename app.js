import dotenv from 'dotenv'
import express from 'express'
import expensesRouter from './src/routes/expenses.js'

import HttpException from './src/application/exception/HttpException.js'
import errorMiddleware from './src/middleware/error.middleware.js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT)

app.use(express.json())

app.use('/expenses', expensesRouter)

app.all('*', (req, res, next) => {
  const err = new HttpException(404, 'Not Found')
  next(err)
})
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`🚀Waiting for requests at http://localhost:${port}`)
})

export default app
