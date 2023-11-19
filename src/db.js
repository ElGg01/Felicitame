import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://ElGg:MongoAtlas-135@cluster0.op6xvfo.mongodb.net/felicitame?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Base de datos conectada")
  } catch (error) {
      console.log(error);
  }
}