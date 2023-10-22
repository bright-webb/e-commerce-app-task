const express = require('express');
const cors = require('cors');
require('dotenv');
const userRoutes = require('./routes/user.routes');
const sequelize = require('./config/database');
const app = express();
const port =  process.env.PORT || 5001; 

app.use(cors());
app.use(express.json())

// api routes
app.use('/api', userRoutes);




sequelize.authenticate().then(() =>{
    console.log('Database connection was successful');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})