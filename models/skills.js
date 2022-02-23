const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const skill_schema=new Schema({

    skill:{type:String},
    

});

const skills=mongoose.model("skills",skill_schema);
module.exports=skills;