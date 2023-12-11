const express = require('express');
const app = express();
const port = 3001;
const maincontrollers = require('./controllers/maincontroller');


app.set('view engine', 'ejs');

app.get('/',maincontrollers.index);

app.get('/p1',maincontrollers.p1);
app.get('/p2',maincontrollers.p2);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

