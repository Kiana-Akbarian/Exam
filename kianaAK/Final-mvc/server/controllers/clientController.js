const dataModel=require('../models/dataModels');
exports.getClientPage=(req,res)=>{
    const data=dataModel.getClientData();
    res.json(data);
}


//here