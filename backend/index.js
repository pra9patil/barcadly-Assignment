// const express = require('express');
// const mongoose = require('mongoose');
// const register = require('./models/register');
// const cors = require('cors');

// const app = express();

// const PORT = 3001;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://patilpranav:Pranav@cluster1.bjxho9m.mongodb.net/cartDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('MongoDB connected');
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
// });

// // Define a schema for the cart items
// const cartItemSchema = new mongoose.Schema({
//   title: String,
//   price: Number,
//   img: String,
//   status: String // Add status field to cart items
// });

// const CartItem = mongoose.model('CartItem', cartItemSchema);

// // Middleware to parse JSON bodies
// app.use(express.json());

// // CORS middleware
// app.use(cors());

// // Endpoint to receive cart data and store it in MongoDB
// app.post('/api/checkout', async (req, res) => {
//   try {
//     const { cart } = req.body;
//     // Assuming cart is an array of cart items
//     // Iterate through each item and save it to the database
//     for (const item of cart) {
//       await CartItem.create(item);
//     }
//     res.status(201).send('Cart data stored successfully');
//   } catch (error) {
//     console.error('Error storing cart data:', error);
//     res.status(500).send('Internal server error');
//   }
// });

// // Endpoint to update checkout item status
// app.put('/api/checkout/:id', async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;

//   try {
//     // Find the checkout item by ID and update its status
//     const updatedItem = await CartItem.findByIdAndUpdate(id, { status }, { new: true });

//     if (!updatedItem) {
//       return res.status(404).send('Checkout item not found');
//     }

//     res.json(updatedItem);
//   } catch (error) {
//     console.error('Error updating checkout item:', error);
//     res.status(500).send('Internal server error');
//   }
// });


// app.post('/api/register',(req ,res) =>{
//    register.create(req.body)
//    .then(register => res.json(register))
//    .catch(err => res.status(400).json('Error:'+ err));
// } )

// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;
//   register.findOne({ email: email })
//     .then(user => {
//       if (user) {
//         if (user.password === password) {
//           res.json("success");
//         } else {
//           res.json("Password is incorrect");
//         }
//       } else {
//         res.json("Email not found");
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).json("Internal Server Error");
//     });
// });


// app.get('/api/cart', async (req, res) => {
//   try {
//     const cartItems = await CartItem.find();
//     res.json(cartItems);
//   } catch (error) {
//     console.error('Error fetching cart items:', error);
//     res.status(500).send('Internal server error');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const register = require('./models/register'); // Assuming you have a model for user registration
const cors = require('cors');

const app = express();

const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://patilpranav:Pranav@cluster1.bjxho9m.mongodb.net/cartDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Define a schema for the cart items
const cartItemSchema = new mongoose.Schema({
  title: String,
  price: Number,
  img: String,
  status: String, // Add status field to cart items
  userEmail: String // Add userEmail field to associate cart items with users
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware
app.use(cors());

// Endpoint to receive cart data and store it in MongoDB
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

// Endpoint to update checkout item status
app.put('/api/checkout/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Find the checkout item by ID and update its status
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

// Endpoint for user registration
app.post('/api/register', (req, res) => {
   register.create(req.body)
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error:'+ err));
});

// Endpoint for user login
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

// Endpoint to fetch cart items for admin or debugging purposes
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
