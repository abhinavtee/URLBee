import User from "../models/user.model.js";
import UrlModel from "../models/shortUrlSchema.js";

export const finduserByEmail = async (email) => {
    return await User.findOne({ email });

};

export const finduserByEmailAndPassword = async (email, password) => {
    return await User.findOne({ email}).select("+password");

};

export const finduserById = async (id) => {
    return await User.findOne( {_id: id } );

};

export const createUser = async (userData) => {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;

};

export const getAllUserUrlsDao = async(id)=>{
    return await UrlModel.find({user: id})
}

