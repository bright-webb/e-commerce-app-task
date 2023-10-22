const express = require('express');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);
app.use('/api', productRoutes);


const PORT  = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});