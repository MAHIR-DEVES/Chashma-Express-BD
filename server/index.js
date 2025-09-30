const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.csfnsag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    console.log('✅ MongoDB connected successfully');

    const db = client.db('Tech_bazar');
    const productCollection = db.collection('products');
    const ordersCollection = db.collection('orders');

    // -------------------- Routes --------------------

    // Test route
    app.get('/', (req, res) => {
      res.send('🚀 Server is running fine!');
    });

    // Save a product
    app.post('/products', async (req, res) => {
      try {
        const productData = req.body;
        const result = await productCollection.insertOne(productData);
        res
          .status(201)
          .json({ message: 'Product saved successfully!', result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Get all products with optional search
    app.get('/get-products', async (req, res) => {
      try {
        const search = req.query.search;
        let query = {};

        if (search) {
          query = { name: { $regex: search, $options: 'i' } };
        }

        const result = await productCollection
          .find(query)
          .sort({ createdAt: -1 }) // 👈 latest product first
          .toArray();

        res.send(result);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Get single product
    app.get('/single-products/:id', async (req, res) => {
      try {
        const id = req.params.id.trim();
        if (!ObjectId.isValid(id))
          return res.status(400).json({ error: 'Invalid product ID' });

        const product = await productCollection.findOne({
          _id: new ObjectId(id),
        });
        if (!product)
          return res.status(404).json({ error: 'Product not found' });

        res.json(product);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Delete a product
    app.delete('/products/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const result = await productCollection.deleteOne({
          _id: new ObjectId(id),
        });
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: 'Delete failed', error });
      }
    });

    // Save order
    app.post('/orders', async (req, res) => {
      try {
        const order = req.body;
        order.createdAt = new Date();
        const result = await ordersCollection.insertOne(order);
        res
          .status(201)
          .json({ message: 'Order saved successfully', id: result.insertedId });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Get orders
    app.get('/get-orders', async (req, res) => {
      try {
        const result = await ordersCollection
          .find()
          .sort({ createdAt: -1 }) // 👈 latest orders first
          .toArray();

        res.json(result);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Update order status
    app.patch('/update-order/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { status } = req.body;

        if (!ObjectId.isValid(id))
          return res.status(400).json({ error: 'Invalid order ID' });

        const result = await ordersCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { status } }
        );

        res.json(result);
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

    // Admin login
    app.post('/admin-login', (req, res) => {
      const { email, password } = req.body;

      if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      ) {
        res.json({ success: true, message: 'Admin login successful' });
      } else {
        res
          .status(401)
          .json({ success: false, message: 'Invalid credentials' });
      }
    });

    // Ping MongoDB to confirm connection
    // await client.db('admin').command({ ping: 1 });
    console.log('🏓 Pinged MongoDB successfully!');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
    // setTimeout(run, 5000); // Retry after 5 seconds
  }
}

// Run the connection
run();

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
