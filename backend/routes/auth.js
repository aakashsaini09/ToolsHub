import { MongoClient } from 'mongodb';
import env from 'dotenv'
import { response } from 'express';
env.config()
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);
export const register = async (req, res) => {
  try {
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('users');
    const tempUser = await inventory.findOne({ email: req.body.email });
    if (!tempUser) {
      const user = await inventory.insertOne(req.body);
      res.status(200).json({ message: "Account created!!!", user });
    } else {
      res.status(500).json({ success: false, message: 'User Already exist' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error });
  } finally {
    await client.close();
  }
};



export const login = async (req, res) => {
  try {
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('users');
    const user = await inventory.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).json({success:false, message: "SignUp First" });
    }
    if (user.password == req.body.password) {
      const { password, ...others } = user;
      return res.status(200).json({success:true, others });
    }
    return res.status(400).json({success: false, message: "Password incorrect" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
};


