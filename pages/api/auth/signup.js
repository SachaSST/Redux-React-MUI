import clientPromise from '../../../libs/mongodb';
import bcrypt from 'bcryptjs';

export default async function signUp(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');

    const { email, password } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    const user = await db.collection('users').findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insérez le nouvel utilisateur dans la base de données
    await db.collection('users').insertOne({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Signup error:', error); 
    res.status(500).json({ message: 'Internal server error' });
  }
}
