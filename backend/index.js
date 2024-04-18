const express = require('express');
const mongoose = require('mongoose');
const register = require('./models/register'); 
const cors = require('cors');

const app = express();

const PORT = 3001;


mongoose.connect('mongodb+srv://patilpranav:Pranav@cluster1.bjxho9m.mongodb.net/cartDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const cartItemSchema = new mongoose.Schema({
  title: String,
  price: Number,
  img: String,
  status: String,
  userEmail: String
});

const CartItem = mongoose.model('CartItem', cartItemSchema);


app.use(express.json());


app.use(cors());


app.post('/api/checkout', async (req, res) => {
  try {
    const {  cart  } = req.body; 
   
    for (const item of cart) {
      await CartItem.create({ ...item }); 
    }
    res.status(201).send('Cart data stored successfully');
  } catch (error) {
    console.error('Error storing cart data:', error);
    res.status(500).send('Internal server error');
  }
});


app.put('/api/checkout/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    
    const updatedItem = await CartItem.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedItem) {
      return res.status(404).send('Checkout item not found');
    }

    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating checkout item:', error);
    res.status(500).send('Internal server error');
  }
});


app.post('/api/register', (req, res) => {
   register.create(req.body)
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error:'+ err));
});


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  register.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("Password is incorrect");
        }
      } else {
        res.json("Email not found");
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json("Internal Server Error");
    });
});


app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
    
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
