const { Router } = require('express')

const {
  getAllInvoices,
  getSingleInvoice,
  createInvoice,
  deleteInvoice,
} = require('../controllers/invoice')

const invoicesRouter = Router()

invoicesRouter.route('/').get(getAllInvoices).post(createInvoice)

invoicesRouter.route('/:id').get(getSingleInvoice).delete(deleteInvoice)

module.exports = { invoicesRouter }
