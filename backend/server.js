import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products.js';
import connectDB from './config/db.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.status(200).json({ message: 'API is running!' });
});

app.get('/api/products', (req, res) => {
	res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
	const productId = req.params.id;
	const product = products.find((product) => product._id === productId);
	res.status(200).json(product);
});

const runServer = async () => {
	await connectDB();
	app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
};
runServer();
