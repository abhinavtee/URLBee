import { loginUserService, registerUserService } from "../services/auth-service.js";
import {cookieOptions} from "../config/config.js";
import { wrapAsync } from "../util/tryCatchWrapper.js";


//wrapAsync is try & catch blocks
export const registerUser = wrapAsync(async (req, res) => {
    const {name, email, password} = req.body;
    const {token, user} = await registerUserService(name, email, password);
    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(201).json({message:"Register Successful"});

});

export const loginUser = wrapAsync(async (req, res) => {
   const {email, password} = req.body;
   const {token, user} = await loginUserService(email, password);
   req.user = user;
   res.cookie("accessToken", token, cookieOptions);
   res.status(200).json({user:user, message:"Login Successful"});
});

export const logoutUser = wrapAsync(async (req, res) => {
    res.clearCookie("accessToken", cookieOptions);
    res.status(200).json({message:"Logout Successful"});
});

export const get_CurrentUser = wrapAsync(async (req, res) => {
    res.status(200).json({user:req.user});
});