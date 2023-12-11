const express = require('express');
const app = express();
const port  = 3001;
const mainController = require('./controllers/mainControllers');



app.set('view engine' , 'ejs');
app.use(express.static('public'));

app.get('/',mainController.index);
app.get('/page1',mainController.page1);
app.get('/page2',mainController.page2);


app.listen(port,()=>{
    console.log("serveris running");
});