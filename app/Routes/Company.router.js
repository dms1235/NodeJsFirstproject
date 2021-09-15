module.exports = app => {
    const companycontroller = require("../Controller/Company.controller");
  
    var router = require("express").Router();
  
    // Create a new Company
    router.post("/", companycontroller.create);
  
    // Retrieve all Company details
    router.get("/", companycontroller.findAll);
   
    // Retrieve a single company detail with id
    router.get("/:id", companycontroller.findOne);
  
    // Update a company detail with id
    router.put("/:id", companycontroller.update);
  
    // Delete a company with id
    router.delete("/:id", companycontroller.delete);
   
  
    app.use('/api/Company', router);
  };