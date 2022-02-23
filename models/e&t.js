const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const et_schema=new Schema({

    qual:{type:String},
    

});

const qual=mongoose.model("e&t",et_schema);
module.exports=qual;