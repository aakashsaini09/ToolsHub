
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors'
import env from 'dotenv'
import { register, login } from './routes/auth.js';
import { addNewProduct, deleteProduct, getUserData, updateProduct } from './routes/userdata.js';
env.config()
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());  
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send("server is ready"); 
});
// Authentication routes
app.post('/register', register);
app.post('/login', login);
// CRUD operations for inventory
app.get('/api/products', getUserData);
app.post('/api/product', addNewProduct);
app.delete('/api/product/:id', deleteProduct);
app.put('/api/productupdate/:id', updateProduct);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
