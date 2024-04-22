import { Support } from "../model/ContactModel.js";

export const createSupport = async (req, res) => {
  try {
    const { name, message, phoneNumber , email } = req.body;
    if(!name || !message || !phoneNumber || !email) throw new Error('All fields Required')
    await Support.create({
      name,
      message,
      email,
      phoneNumber
    });
    return res.status(201).json({msg: "Successfully Submitted"});
  } catch (error) {
    return res.status(400).json({msg:error.message});
  }
};



