module.exports = app => {
    const user = require("../Controller/User.controller");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", user.create);
  
    // Retrieve all Users
    router.get("/", user.findAll);
   
    // Retrieve a single User with id
    router.get("/:id", user.findOne);
   
    app.use('/api/User', router);
  };