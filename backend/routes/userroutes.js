// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const userModel = require('../model/userData'); 

// const router = express.Router();

// const superkey=process.env.JWT_SECRET;

// // Signup user or Register user

// router.post('/signup', async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     // Check if user already exists by email or username
//     const existingUser = await userModel.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new userModel({ username, email, password: hashedPassword });
//     await newUser.save();

//     res.status(200).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error registering user', error: error.message });
//   }
// });

// // Login user 


// router.post('/login', async (req, res) => {
//   const { username, email, password } = req.body;
  
//   try {
//     // Check if user exists by either email or username
//     const user = await userModel.findOne({ $or: [{ email }, { username }] });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Check password match
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Create JWT token
//     const token = jwt.sign({ userId: user._id, role: user.role }, superkey, { expiresIn: '1h' });
//     return res.status(200).json({ token, role: user.role });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // GET all users
// router.get('/users', async (req,res) => {
//   try {
//     const users = await userModel.find(); // Fetch all users
//     res.status(200).json(users); // Return users data
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching users' });
//   }
// });

// // DELETE user (Ban user)
// router.delete('/deleteuser/:id', async (req, res) => {
//   const { id } = req.params; // Get the user ID from the request params
//   try {
//     const deletedUser = await userModel.findByIdAndDelete(id); // Delete user by ID
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User banned successfully', userId: id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error banning user' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

const { loginUser, registerUser } = require('../controllers/userController');

router.post("/register",registerUser);
router.post('/login',loginUser);

module.exports=router;