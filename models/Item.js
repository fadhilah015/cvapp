const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creat Schema
const ItemSchema = new Schema(
  {
    name: {
      type: String, required: true },
    lname: {type: String, required: true },
    university: {type: String, required: true},
    major: {type: String,required: true}
  });

module.exports = Item = mongoose.model('item', ItemSchema);
