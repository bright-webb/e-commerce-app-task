const express = require('express');
const cors = require('cors');
require('dotenv');
const productRoutes = require('./routes/product.routes');
const sequelize = require('./config/database');
const app = express();
const port =  process.env.PORT || 6001; 

app.use(cors());
app.use(express.json())

// api routes
app.use('/api', productRoutes);




sequelize.authenticate().then(() =>{
    console.log('Database connection was successful');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})