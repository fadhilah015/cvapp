const express = require ('express');
const  router = express.Router();

const Item = require ('../../models/Item');


// git api/item
// git all Items

router.get('/',(req,res) => {
  Item.find()
  .sort({ data: -1})
  .then(items => res.json(items));
});


router.post('/',(req,res) => {
  const newItem = new Item ({
    name: req.body.name,
    lname: req.body.lname,
    university: req.body.university,
    major: req.body.major

  });

newItem.save().then(item => res.json(item));
});

module.exports = router;
