const dataModel = require('../models/dataModels');

exports.getAdminPage = (req,res) => {
    const data = dataModel.getAdminData();
    res.json(data);
};

exports.addAdminData = (req,res) => {
    const {newData} = req.body;
    dataModel.addAdminData(newData);
    res.json({
        message:'data imported'
    });
};