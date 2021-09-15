const itemmasterdb = require('../models/itemmaster');
const itemmaster_db = itemmasterdb.Item_Master;


exports.create = async (req, res,next) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Item
    const itemcreate = new itemmaster_db({
        ItemCode: req.body.ItemCode,
        ItemName: req.body.ItemName,
        UOM: req.body.UOM,
        HSNCode:req.body.HSNCode,
        GSTRate:req.body.GSTRate,
        ItemPrice:req.body.ItemPrice,
        IsActive:req.body.IsActive
    });
  
    // Save Item in the database
     
   await itemcreate
      .save(itemcreate)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."

        });
        next();
      });
  };
 // Retrieve all Items from the database.
 exports.findAll = (req, res) => {
    itemmaster_db.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};
//one record find
exports.findOne = (req, res) => {
  const id = req.params.id;

  itemmaster_db.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};
//update
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
   
    itemmaster_db.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update item with id=${id}. Maybe item was not found!`
          });
        } else res.send({ message: "Item was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Item with id=" + id
        });
      });
  };
//delete
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    itemmaster_db.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete item with id=${id}. Maybe item was not found!`
          });
        } else {
          res.send({
            message: "Item was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Item with id=" + id
        });
      });
  }