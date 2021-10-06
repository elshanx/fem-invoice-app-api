const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'required error message'],
    trim: true,
  },
  status: {
    type: String,
    default: 'draft',
  },
})

module.exports = mongoose.model('Invoice', InvoiceSchema)
