import { verifyToken } from "../util/helper.js";
import { finduserById } from "../dao/user-dao.js";

export const authMiddleware = async(req, res, next)=>{
    const token = req.cookies.accessToken;
    if(!token)
        return res.status(401).json({message:"Unauthorized"});
    try{
        const decoded = verifyToken(token);
        const user = await finduserById(decoded);
        if(!user)
            return res.status(401).json({message:"Unauthorized"});
        req.user = user;
        next();
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized"});
    }
}