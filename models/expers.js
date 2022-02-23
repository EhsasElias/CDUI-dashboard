const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const exper_schema=new Schema({

    exper:{type:String},
    

});

const expers=mongoose.model("expers",exper_schema);
module.exports=expers;