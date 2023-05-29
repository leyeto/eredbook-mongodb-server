import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const connection = async () => {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("error in connection");
      } else {
        console.log("mongodb is connected");
      }
    }
  );
};

export default connection;
