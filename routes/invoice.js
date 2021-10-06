const { Router } = require('express')
const { createInvoice, getInvoice } = require('../controllers')

const invoiceRouter = Router()

invoiceRouter.route('/').get(getInvoice).post(createInvoice)

module.exports = { invoiceRouter }
