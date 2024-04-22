import mongoose from "mongoose";

const supportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  }
},{timestamps:true});


export const Support = mongoose.model("Support", supportSchema);
