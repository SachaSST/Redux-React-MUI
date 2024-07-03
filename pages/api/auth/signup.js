import clientPromise from '../../../libs/mongodb';
import bcrypt from 'bcryptjs';

export default async function signUp(req, res) {
  try {
    console.log("Connecting to MongoDB...");
    const client = await clientPromise;
    console.log("Connected to MongoDB");

    const db = client.db('TodoApp'); 
    console.log("Using database:", db.databaseName);

    const { email, password } = req.body;
    console.log("Received signup request for email:", email);

    if (!email || !password) {
      console.log("Email or password is missing");
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    const newUser = {
      email,
      password: hashedPassword,
    };

    const result = await db.collection('users').insertOne(newUser);
    console.log("User created with ID:", result.insertedId);

    res.status(201).json({ message: 'User created', userId: result.insertedId });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
