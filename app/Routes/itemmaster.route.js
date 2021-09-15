module.exports = app => {
    const itemmastercontroller = require("../Controller/itemmaster.controller");
  
    var router = require("express").Router();
  
    // Create a new Item
    router.post("/", itemmastercontroller.create);
  
    // Retrieve all Items
    router.get("/", itemmastercontroller.findAll);
   
    // Retrieve a single Item with id
    router.get("/:id", itemmastercontroller.findOne);
  
    // Update a Item with id
     router.put("/:id", itemmastercontroller.update);
  
    // Delete a Item with id
    router.delete("/:id", itemmastercontroller.delete);
  
 
    app.use('/api/ItemMaster', router);
  };