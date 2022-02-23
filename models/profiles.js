const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const profile_schema=new Schema({

    name:{type:String},
    title:{type:String},
    location:{type:String},
    email:{type:String},
    phone:{type:Number},
    image:{type:String},
    bio:{type:String}

});

const profiles=mongoose.model("profiles",profile_schema);
module.exports=profiles;