const express = require('express');
const cors = require('cors');
require('dotenv'); // load environment variables
const sequelize = require('./configuration/database');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/order.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');


const app = express();
const port =  process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

// api routes
app.use('/api', userRoutes);
app.use('/api', orderRoutes);
app.use('/api', productRoutes);
app.use('/api', authRoutes);



sequelize.authenticate().then(() =>{
    console.log('Database connection was successful');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})