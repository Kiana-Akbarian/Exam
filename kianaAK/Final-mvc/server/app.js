const express = require('express');
const app = express();
const port = 3001;
app.get('/',(req,res)=>{
  res.send('hello');
});


//here


//back

// Define routes and middleware here...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




