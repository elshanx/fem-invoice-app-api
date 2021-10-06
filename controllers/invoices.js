const invoice = require('../models/invoice')

const getInvoice = async (req, res) => {
  const invoices = await invoice.find({})
  res.status(200).json({ invoices })
}

const createInvoice = async (req, res) => {
  try {
    const invoices = await invoice.create(req.body)
    res.status(201).json({ invoices })
  } catch (error) {
    res.status(500).json({ message: error.name.message })
  }
}

module.exports = { getInvoice, createInvoice }
