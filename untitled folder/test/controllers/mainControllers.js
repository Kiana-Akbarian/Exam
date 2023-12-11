const mainController = {};

mainController.index = (req,res) =>{
    res.render('index');
};


mainController.page1 = (req,res) =>{
    res.render('page1');
};

mainController.page2 = (req,res) =>{
    res.render('page2');
};

module.exports = mainController;