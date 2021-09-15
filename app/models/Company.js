var mongoose = require('mongoose');
var Schema = mongoose.Schema;



let Companyschema = new Schema({
    CompanyName: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    Address1: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    Address2: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    Address3: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    MobileNumber: {
        type: Number,
        default: null,
        required: true
    },
    PhoneNumber: {
        type: Number,
        default: null,
        required: true
    },
    Email:{
        type:String,
        trim: true,
        default:null,
        required:true
    },
    Website:{
        type:String,
        default:null,
        required:true
    },
    PanNumber: {
        type: String,
        default:null,
        required:true
    },
    GSTnumber: {
        type: String,
        default:null,
        required:true
    },
    BanKName: {
        type: String,
        default:null,
        required:true
    },
    AccountNumber: {
        type: String,
        default:null,
        required:true
    },
    Branch: {
        type: String,
        default:null,
        required:true
    },
    IFSCCode: {
        type: String,
        default:null,
        required:true
    },
    createdDate: { type: Date, default: Date.now },
    UpdateDate: { type: Date, default: null }
});

const Company_Master = mongoose.model('Company_Master', Companyschema);
exports.Company_Master = Company_Master;
