const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creat Schema
const ItemSchema = new Schema(
  {
    fname: {typ: String, required: true, max: 100},
    lname: {typ: String, required: true, max: 100},
    university: {typ: String, required: true, max: 100},
    major: {typ: String,required: true, max: 100},

  });

module.exports = Item = mongoose.model('item', ItemSchema);
