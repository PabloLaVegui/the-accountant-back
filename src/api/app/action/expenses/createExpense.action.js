import { validationResult } from 'express-validator'
import HttpException from '../../exception/HttpException.js'

const create = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new HttpException(400, 'Validation failed', errors)
  }

  res.send('hi post!')
}

export default create
