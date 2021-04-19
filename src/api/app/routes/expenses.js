import express from 'express'
import createExpenseSchema from '../middleware/validator/expenseValidator.middleware.js'
import awaitHandlerFactory from '../middleware/awaitHandlerFactory.middleware.js'
import create from '../action/expenses/createExpense.action.js'

const expensesRouter = express.Router()

expensesRouter.post('/', createExpenseSchema, awaitHandlerFactory(create))

export default expensesRouter
