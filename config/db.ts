const mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("eRedBook database did not connect");

    handleError(error);
  }
};

const handleError = (error: unknown) => {
  console.error(error);
};
