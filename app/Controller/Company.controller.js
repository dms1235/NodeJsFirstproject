const Companydb = require('../models/Company');
const com_master_db = Companydb.Company_Master;



exports.create = async (req, res,next) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Item
    const companycreate = new com_master_db({
        CompanyName: req.body.CompanyName,
        Address1: req.body.Address1,
        Address2: req.body.Address2,
        Address3:req.body.Address3,
        MobileNumber:req.body.MobileNumber,
        PhoneNumber:req.body.PhoneNumber,
        Email:req.body.Email,
        Website:req.body.Website,
        PanNumber:req.body.PanNumber,
        GSTnumber:req.body.GSTnumber,
        BanKName:req.body.BanKName,
        AccountNumber:req.body.AccountNumber,
        Branch:req.body.Branch,
        IFSCCode:req.body.IFSCCode
    });
  
    // Save Item in the database
     
   await companycreate
      .save(companycreate)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating company."

        });
        next();
      });
  };
 // Retrieve all Items from the database.
 exports.findAll = (req, res) => {
    com_master_db.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving company details."
      });
    });
};
//one record find
exports.findOne = (req, res) => {
  const id = req.params.id;

  com_master_db.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found company detail with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving company detail with id=" + id });
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
   
    com_master_db.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update company detail with id=${id}. Maybe company detail was not found!`
          });
        } else res.send({ message: "Company details was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Company detail with id=" + id
        });
      });
  };
//delete
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    com_master_db.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete company detail with id=${id}. Maybe company detail was not found!`
          });
        } else {
          res.send({
            message: "Company detail was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete company detail with id=" + id
        });
      });
  }