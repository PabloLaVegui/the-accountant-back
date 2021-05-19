import { validationResult } from 'express-validator'
import HttpException from '../../exception/HttpException.js'
import createExpense from '../../../expenses/createExpense.js'

const create = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, 'Validation failed', errors)
  }

  createExpense({
    conceptName: req.body.concept,
    amount: req.body.amount,
  })
    .then((id) => {
      res.status(201).json({ id }) // TODO: devolver el objeto completo
    })
    .catch((error) => {
      res.status(500).json({ error: error.toString() })
    })
}

export default create
