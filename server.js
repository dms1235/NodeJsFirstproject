const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const app = express();
var mongoose = require('mongoose');

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dhavan application." });
});

// MongoDB Connection
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.db, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true 
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log("DB Connection Error: " + err.message);
    });
    
   //User
    require("./app/Routes/Users.router.js")(app);
    //Item Master
    require("./app/Routes/itemmaster.route")(app);
   //Company 
   require("./app/Routes/Company.router")(app);
   //Invoice
   require("./app/Routes/Invoice.router")(app);
// set port, listen for requests
const PORT = process.env.PORT || dbConfig.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});