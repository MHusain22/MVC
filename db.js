import mongoose from "mongoose";

const connectDB = async() => {
     try{
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedToplogy: true  });
       console.log("database connected successfully");
    }
       catch (error) {
        console.log("Error while connecting with the database " ,error);
    }
}

export default connectDB;