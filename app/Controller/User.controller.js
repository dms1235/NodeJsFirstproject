const userdb  = require("../models/Users")
const user = userdb.App_users;


exports.create = async (req, res,next) => {
    // Validate request
    if (!req.body.Name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a User
    const usercreate = new user({
        Name: req.body.Name,
        email: req.body.email,
        password: req.body.password,
        mobile:req.body.mobile
    });
  
    // Save User in the database
     
   await usercreate
      .save(usercreate)
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
 // Retrieve all Users from the database.
 exports.findAll = (req, res) => {
  user.find()
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

  user.findById(id)
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
   