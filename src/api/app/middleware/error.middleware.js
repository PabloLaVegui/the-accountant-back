function errorMiddleware(error, req, res, next) {
  const { status = 500, message, data } = error

  console.log(`[Error] ${error}`)

  error = {
    type: 'error',
    status,
    message,
    ...(data && data),
  }

  res.status(status).send(error)
}

export default errorMiddleware
