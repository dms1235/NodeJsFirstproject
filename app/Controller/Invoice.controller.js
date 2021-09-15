const InvoiceMasterDB = require('../models/InvoiceMaster');
const Invoice_DB = InvoiceMasterDB.Invoice_Master;
const InvoiceDetailDB = require('../models/InvoiceDetail');
const { json } = require('express');
const Invoice_Detail_DB = InvoiceDetailDB.Invoice_Detail;

exports.create = async (req, res,next) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Item
    const Invoice_master_create = new Invoice_DB({
        InvoiceDate: req.body.InvoiceDate,
        PONumber: req.body.PONumber,
        PODate:req.body.PODate,
        VendorCode:req.body.VendorCode,
        ModeOfTransport:req.body.ModeOfTransport,
        DeliveryNote:req.body.DeliveryNote,
        Transpoter:req.body.Transpoter,
        LRNo:req.body.LRNo,
        SupplyDateandTime:req.body.SupplyDateandTime,
        PlaceOfSupply:req.body.PlaceOfSupply,
        BillToCompanyName:req.body.BillToCompanyName,
        BillToAddress1:req.body.BillToAddress1,
        BillToAddress2:req.body.BillToAddress2,
        BillToAddress3:req.body.BillToAddress3,
        BillToAddress4:req.body.BillToAddress4,
        BillToGSTNo:req.body.BillToGSTNo,
        ConsigneCompanyName:req.body.ConsigneCompanyName,
        ConsigneAddress1:req.body.ConsigneAddress1,
        ConsigneAddress2:req.body.ConsigneAddress2,
        ConsigneAddress3:req.body.ConsigneAddress3,
        ConsigneAddress4:req.body.ConsigneAddress4,
        ConsigneGSTNo:req.body.ConsigneGSTNo,
        IsActive:req.body.IsActive
    });
  
    // Save Item in the database
     
   await Invoice_DB
      .save(Invoice_DB)
      .then(data => {
        //res.send(data);
        this.Invoicedetail_save(req,res,data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating company."

        });
        next();
      });
  };

  async function Invoicedetail_save(req,res,InvoiceMaster){
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
      var obj = JSON.parse(InvoiceMaster);
      // Create a Item
      const Invoice_detail_create = new Invoice_Detail_DB({
        ItemName: req.body.ItemName,
        ItemCode: req.body.ItemCode,
        ItemID:req.body.ItemID,
        ItemQty:req.body.ItemQty,
        ItemRate:req.body.ItemRate,
        ItemAmount:req.body.ItemAmount,
        DiscAmt:req.body.DiscAmt,
        ItemWiseAmout:req.body.ItemWiseAmout,
        NetAmount:req.body.NetAmount,
        InvoiceMasterID:obj._id,
        GrossAmount:req.body.GrossAmount
      });
    
      // Save Item in the database
       
     await Invoice_detail_create
        .save(Invoice_detail_create)
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
  }
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