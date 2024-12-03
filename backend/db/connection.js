const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = require('../model/userData'); // Import the User model

// MongoDB connection string and admin credentials
const mongoDB_URL = process.env.MONGODB_URL;
const adminEmail = "admin007@gmail.com";
const adminPassword = "admin@123";

mongoose.connect(mongoDB_URL,).then(() => {
    console.log("Database connection established successfully");
    createAdminUser(); // Create the admin user after connecting
}).catch((err) => {
    console.log("Database connection failed");
    console.error(err);
});

async function createAdminUser() {
  const existingAdmin = await userModel.findOne({ email: adminEmail });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10); // Hash the password

    const adminUser = new userModel({
      email: adminEmail,
      username: "admin", // Username for the admin
      password: hashedPassword, // Store the hashed password
      role: "admin" // Admin role
    });
    await adminUser.save();
    console.log("Admin user created successfully");
  } else {
    console.log("Admin user already exists");
  }
}
