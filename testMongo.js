import clientPromise from './libs/mongodb.js';

async function testConnection() {
  try {
    const client = await clientPromise;
    const db = client.db('TodoApp');  
    console.log('Connected to MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

testConnection();
