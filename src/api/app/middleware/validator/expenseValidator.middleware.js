import { body } from 'express-validator'

const createExpenseSchema = [
  body('concept').exists().withMessage('Concept is required'),
  body('amount')
    .exists()
    .withMessage('Amount is required')
    .isFloat()
    .withMessage('Invalid amount'),
]

export default createExpenseSchema
