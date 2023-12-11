const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const adminRoutes =  require('./routes/adminRoutes');
const clientRoutes =  require('./routes/clientRoutes');

app.use('/admin',adminRoutes);
app.use('/client',clientRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
