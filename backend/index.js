import express, { response } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { MongoClient, ObjectId } from 'mongodb';
const app = express()
// app.use(express.static('dist'))
app.use(cors());
const uri = "mongodb+srv://aakash:FMTeGe40LV2l1nNP@cluster0.hio303d.mongodb.net/";
const client = new MongoClient(uri);

app.get('/', (req, res) => {
  res.send("server is ready");
})
app.get('/api', (req, res) => {
  res.send("hello bro");
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
})
// To get all product when page load********************************************
app.get('/api/products', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const products = await inventory.find({}).toArray();
    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
// for add new products *****************************************************
app.use(bodyParser.json());
app.post('/api/product', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const product = await inventory.insertOne(req.body);
    res.json({ product, ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});
// for delete a products *****************************************************
app.delete('/api/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const database = client.db('stock');
    const inventory = database.collection('inventory');

    // Check if productId is a valid ObjectId
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }

    const result = await inventory.deleteOne({ _id: new ObjectId(productId) });

    if (result.deletedCount === 1) {
      res.json({ success: true, message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
// ***********************************************for authentication *****************************************************
// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
};
// User registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('stock');
    const users = database.collection('users');

    // Check if user already exists
    const existingUser = await users.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Insert new user into the database
    const newUser = await users.insertOne({ email: req.body.email, password: hashedPassword });
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
// User login endpoint
app.post('/api/login', async (req, res) => {
  const data = res
  console.log(res)
  try {
    await client.connect();
    const database = client.db('stock');
    const users = database.collection('users');

    // Find user by email
    const user = await users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
// Protected route example
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ success: true, message: 'Protected route accessed successfully' });
});

