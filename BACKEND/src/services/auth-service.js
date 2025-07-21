import { createUser, finduserByEmail, finduserByEmailAndPassword } from "../dao/user-dao.js";
import { ConflictError } from "../util/errorHandler.js";
import { signToken } from "../util/helper.js";

export const registerUserService = async (name, email, password) => {
    const user = await finduserByEmail(email);
    if (user)
        throw new ConflictError("User already exists")
    else {
        const newUser = await createUser({
            name,
            email,
            password
        });
        const token = signToken({id:newUser._id});
        return {token, user};
    }
}

export const loginUserService = async (email, password)=>{
            const user = await finduserByEmailAndPassword(email,password);
            if(!user)
                throw new Error("Invalid credentials");
            const isPasswordValid = await user.comparePassword(password);
            if(!isPasswordValid)
                throw new Error("Invalid credentials");
            const token =  signToken({id:user._id});
            return {token, user};
};
