import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log('Mongo connecté');
  } catch (err) {
    if (err instanceof Error) {
      console.error('Erreur de connexion à MongoDB : ', err.message);
    } else {
      console.error('Erreur de connexion à MongoDB : ', err);
    }
    process.exit(1);
  }
};

export default connectDB;