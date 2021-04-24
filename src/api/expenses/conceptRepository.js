import connection from '../db/connection.js'

const table = 'expense_concept'

export const byName = async (name) => {
  const [rows] = await connection().then((conn) =>
    conn.execute(`SELECT * FROM ${table} WHERE name = ?`, [name])
  )
  return rows ? rows[0] : undefined
}

export const insert = async (conceptName) => {
  const [result] = await connection().then((conn) =>
    conn.execute(`INSERT INTO ${table} (name) VALUES (?)`, [conceptName])
  )
  return result.insertId
}
