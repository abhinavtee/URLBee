import urlSchema from "../models/shortUrlSchema.js";
import { ConflictError } from "../util/errorHandler.js";

export const saveShortUrl = async (shortcode, url, userId) => {
    try {
        const newUrl = new urlSchema({
            full_url: url,
            short_url: shortcode,
        });
        if (userId) {
            newUrl.user = userId;
        }
        await newUrl.save();
    } catch (err) {
        if(err.code === 11000){
            throw new ConflictError("Short Url already exists");
        }
        throw new Error(err);
    }
};

export const findUrlfromShortUrl = async (id) => {
    return await urlSchema.findOneAndUpdate({ short_url: id }, { $inc: { clicks: 1 } });
}

export const getCustomShortUrl = async (customShortUrl) => {
    return await urlSchema.findOne({ short_url: customShortUrl });
   
}

export const deleteShortUrl = async (shortUrlId, userId) => {
    return await urlSchema.findOneAndDelete({ 
        _id: shortUrlId, 
        user: userId 
    });
}
