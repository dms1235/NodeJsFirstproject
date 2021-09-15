var mongoose = require('mongoose');
var Schema = mongoose.Schema;



let InvoiceDetailsschema = new Schema({
    ItemName: {
        type: String,
        default: null,
        required: true
    },
    ItemCode: {
        type: String,
        default: null,
        required: true
    },
    ItemID: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    ItemQty : {
        type:Number,
        default: null,
        required: true
    },
    ItemRate: {
        type:Number,
        default: null,
        required: true
    },
    ItemAmount:{
        type:Number,
        default: null,
        required: true
    },
    DiscAmt:{
        type:Number,
        default: null,
        required: true
    },
    ItemWiseAmout:{
        type:Number,
        default: null,
        required: true
    },
    NetAmount:{
        type:Number,
        default: null,
        required: true
    },
    InvoiceMasterID: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    GrossAmount:{
        type:Number,
        default:null,
        required:true
    },
    createdDate: { type: Date, default: Date.now },
    UpdateDate: { type: Date, default: null }
});

const Invoice_Detail = mongoose.model('Invoice_Detail', InvoiceDetailsschema);
exports.Invoice_Detail = Invoice_Detail;
