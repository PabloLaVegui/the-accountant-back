import dotenv from 'dotenv'
import express from 'express'
import expensesRouter from './src/routes/expenses.js'
dotenv.config()

const app = express()
const port = Number(process.env.PORT)

app.use(express.json())

app.use('/expenses', expensesRouter)

app.listen(port, () => {
  console.log(`🚀Waiting for requests at http://localhost:${port}`)
})

export default app
