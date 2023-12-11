const model = require('../model')

const maincontrollers= {};

maincontrollers.index = (req,res) =>{
    res.render('index',{users : model.users});
};
maincontrollers.p1 = (req,res) =>{
    res.render('p1',{users : model.users});
};
maincontrollers.p2 = (req,res) =>{
    res.render('p2',{users : model.users});
};
module.exports = maincontrollers;