import {
  byName as conceptByName,
  insert as conceptInsert,
} from './conceptRepository.js'
import { insert as expenseInsert } from './expenseRepository.js'

export default async ({ conceptName, amount }) => {
  const conceptId = await conceptByName(conceptName).then((concept) =>
    concept ? concept.id : conceptInsert(conceptName).then((id) => id)
  )

  return await expenseInsert({
    conceptId: conceptId,
    amount: amount,
    createdAt: new Date(),
  }).then((expenseId) => expenseId)
}
