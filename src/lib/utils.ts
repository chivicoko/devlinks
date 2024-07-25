
import mongoose from "mongoose";

// Define the connection type
interface Connection {
  isConnected?: boolean;
}

// Initialize the connection object
const connection: Connection = {};

export const connectToDb = async () => {
  try {
    // Check if already connected
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    // Ensure the environment variable is a string
    const mongoUri = process.env.MONGO_URI;
    console.log(mongoUri);
    
    if (!mongoUri) {
        console.log("MongoDB URI is not defined in the environment variables");
        throw new Error("MongoDB URI is not defined in the environment variables");
    }

    // Connect to MongoDB
    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to MongoDB");
  }
};
