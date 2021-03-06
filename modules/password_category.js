const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/PMS',{useNewUrlParser:true,useCreateIndex:true});
var conn=mongoose.Collection;
var passCatSchema=new mongoose.Schema({
     password_category : {
         type:String,
         required:true,
     },
    date:{
        type:Date,
        default:Date.now
    }
});

var passCatModel=mongoose.model('password_category',passCatSchema);
module.exports=passCatModel;