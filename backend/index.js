import express, { response } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import { register, login } from './controller/auth.js';
import { MongoClient, ObjectId } from 'mongodb';
import { addNewProduct, deleteProduct, getUserData } from './routes/userdata.js';
const port = process.env.PORT || 3000;
const app = express()
app.use(cors());
const uri = "mongodb+srv://aakash:FMTeGe40LV2l1nNP@cluster0.hio303d.mongodb.net/";
const client = new MongoClient(uri);
app.get('/', (req, res) => {
  res.send("server is ready");
})
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
})
app.use(bodyParser.json());
app.get('/api/products', getUserData)
app.post('/api/product', addNewProduct);
app.delete('/api/product/:id', deleteProduct);
// auth
app.post('/register', register)
app.get('/login', login)




// import User from './modules/User.js';
// import bcrypt from 'bcryptjs'
// import authRoute from './routes/auth.js'
// import { register, login } from './auth/auth.js';



// ***********************************************for authentication *****************************************************
// app.use('/api/auth', authRoute);
// Middleware to verify JWT
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
//   }

//   jwt.verify(token, 'secret', (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };
// User registration endpoint
// app.post('/api/register', async (req, res) => {
//   try {
//     await client.connect();
//     const database = client.db('stock');
//     const users = database.collection('users');

//     // Check if user already exists
//     const existingUser = await users.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     // Insert new user into the database
//     const newUser = await users.insertOne({ email: req.body.email, password: hashedPassword });
//     res.status(201).json({ success: true, message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });
// User login endpoint
// app.post('/api/auth/login', async (req, res) => {
//   console.log(req.body)
//   try {
//     await client.connect();
//     const database = client.db('stock');
//     const users = database.collection('users');

//     // Find user by email
//     const user = await users.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }
//     if(req.body.password == user.password){
//       console.log("password mathched")
//     }
//     // Generate JWT
//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// app.post('/api/auth/register', async(req, res) => {
//   console.log(req.body)
//   try {
//     await client.connect();
//     const database = client.db('stock');
//     const inventory = database.collection('users');
//     const user = await inventory.insertOne(req.body);
//     res.json({ user, ok: true });
// } catch (err) {
//     console.log(err)
// }
// })
// Protected route example
// app.get('/api/protected', verifyToken, (req, res) => {
//   res.json({ success: true, message: 'Protected route accessed successfully' });
// });

