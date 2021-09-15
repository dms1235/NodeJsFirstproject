var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);


let InvoiceMasterschema = new Schema({
    InvoiceNumber: {
        type: Number,
        default: null,
        required: true
    },
    InvoiceDate: {
        type: Date,
        default: null,
        required: true
    },
    PONumber: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    PODate: {
        type: Date,
        trim: true,
        default: null,
        required: true
    },
    VendorCode: {
        type: String,
        default: null,
        required: true
    },
    ModeOfTransport: {
        type: String,
        default: null,
        required: true
    },
    DeliveryNote:{
        type:String,
        trim: true,
        default:null,
        required:true
    },
    Transpoter:{
        type:String,
        default:null,
        required:true
    },
    LRNo: {
        type: String,
        default:null,
        required:true
    },
    SupplyDateandTime: {
        type: Date,
        default:null,
        required:true
    },
    PlaceOfSupply: {
        type: String,
        default:null,
        required:true
    },
    BillToCompanyName: {
        type: String,
        default:null,
        required:true
    },
    BillToAddress1: {
        type: String,
        default:null,
        required:true
    },
    BillToAddress2: {
        type: String,
        default:null,
        required:true
    },
    BillToAddress3: {
        type: String,
        default:null,
        required:true
    },
    BillToAddress4: {
        type: String,
        default:null,
        required:true
    },
    BillToGSTNo: {
        type: String,
        default:null,
        required:true
    },
    ConsigneCompanyName: {
        type: String,
        default:null,
        required:true
    },
    ConsigneAddress1: {
        type: String,
        default:null,
        required:true
    },
    ConsigneAddress2: {
        type: String,
        default:null,
        required:true
    },
    ConsigneAddress3: {
        type: String,
        default:null,
        required:true
    },
    ConsigneAddress4: {
        type: String,
        default:null,
        required:true
    },
    ConsigneGSTNo: {
        type: String,
        default:null,
        required:true
    },
    IsActive:{
        type:Boolean,
        default:true,
        required:true
    },
    createdDate: { type: Date, default: Date.now },
    UpdateDate: { type: Date, default: null }
});
//Apply AutoIncrement TO ISSUE ID
InvoiceMasterschema.plugin(AutoIncrement, { inc_field: 'InvoiceNumber' });


const Invoice_Master = mongoose.model('Invoice_Master', InvoiceMasterschema);
exports.Invoice_Master = Invoice_Master;
