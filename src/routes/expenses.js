import express from 'express'

const expensesRouter = express.Router();

expensesRouter.get('/', function(req, res, next) {
  res.send('hi!');
});

export default expensesRouter;
