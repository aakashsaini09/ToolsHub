import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
const uri = "mongodb+srv://aakash:FMTeGe40LV2l1nNP@cluster0.hio303d.mongodb.net/";
const client = new MongoClient(uri);
// app.use(bodyParser.json());
// To get all product when page load********************************************
export const getUserData =  async (req, res) => {
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
  };

// for add new products *****************************************************
// app.use(bodyParser.json());
 export const addNewProduct = async (req, res) => {
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
  };



// for delete a products *****************************************************
export const deleteProduct = async (req, res) => {
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
  };