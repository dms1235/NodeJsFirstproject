var mongoose = require('mongoose');
var Schema = mongoose.Schema;



let Itemmasterschema = new Schema({
    ItemCode: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    ItemName: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    UOM: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    HSNCode: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    GSTRate:{
        type:Number,
        default:0,
        required:true
    },
    ItemPrice:{
        type:Number,
        default:0,
        required:true
    },
    IsActive: {
        type: Boolean,
        default:true,
        required:true
    },
    createdDate: { type: Date, default: Date.now },
    UpdateDate: { type: Date, default: null }
});

const Item_Master = mongoose.model('Item_Master', Itemmasterschema);
exports.Item_Master = Item_Master;
