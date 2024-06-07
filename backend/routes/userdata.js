import { MongoClient, ObjectId } from 'mongodb';
import env from 'dotenv'
import ProductSchema from '../module/productSchema.js';
env.config()
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);
export const getUserData = async (req, res) => {
  try {
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    let query = {};
    if (req.query.email) {
      query.createdBy = req.query.email;
    } else {
      return res.status(400).json({ success: false, message: 'Provide email first' });
    }
    const products = await inventory.find(query).toArray();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
};
export const addNewProduct = async (req, res) => {
  try {
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const { productForm, email } = req.body;

    // Explicitly parse price and quantity as numbers
    const price = parseFloat(productForm.price);
    const quantity = parseFloat(productForm.quantity);
    // Check if parsing was successful
    if (isNaN(price) || isNaN(quantity)) {
      return res.status(400).json({ success: false, message: 'Price and quantity must be valid numbers' });
    }
    const product = await inventory.insertOne(productData);
    res.json({ product, ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
};



// ********************************To delete stock*****************************************
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('inventory');
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
  } finally {
    await client.close();
  }
};
// ***************************************Update product*************************************
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { slug, quantity, price } = req.body;
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }
    await client.connect();
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const existingProduct = await inventory.findOne({ _id: new ObjectId(productId) });
    if (!existingProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    const updateData = {};
    if (slug) updateData.slug = slug;
    if (quantity) updateData.quantity = quantity;
    if (price) updateData.price = price;
    const result = await inventory.updateOne(
      { _id: new ObjectId(productId) },
      { $set: updateData }
    );
    if (result.modifiedCount === 1) {
      res.json({ success: true, message: 'Product updated successfully' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to update product' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
};
