import connection from '../db/connection.js'
import mysqlDate from '../db/mysqlDate.js'

const table = 'expense'

export const insert = async ({ conceptId, amount, createdAt }) => {
  const [result] = await connection().then((conn) =>
    conn.execute(
      `INSERT INTO ${table} (concept_id, amount, created_at) VALUES (?, ?, ?)`,
      [conceptId, amount, mysqlDate(createdAt)]
    )
  )
  return result.insertId
}
