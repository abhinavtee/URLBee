import { getCustomShortUrl, saveShortUrl, deleteShortUrl } from "../dao/short-url-dao.js";
import { generateNanoId } from "../util/helper.js";
import { normalizeUrl } from "../util/urlNormalizer.js";
 

export const createShortUrlWithoutUserService = async (url) => {
    const shortcode = generateNanoId(7);
    if (!shortcode) throw new Error("Short Url not generated");

    const normalizedUrl = normalizeUrl(url);   
    await saveShortUrl(shortcode, normalizedUrl);
    return shortcode;
};

export const createShortUrlWithUserService = async (url, userId, customShortUrl=null) => {
    const shortcode = customShortUrl || generateNanoId(7);
    
    if (customShortUrl) {
        const exists = await getCustomShortUrl(customShortUrl);
        if (exists) throw new Error("This custom Url already exists");
    }

    const normalizedUrl = normalizeUrl(url);   
    await saveShortUrl(shortcode, normalizedUrl, userId);
    return shortcode;
};

export const deleteShortUrlService = async (shortUrlId, userId) => {
    const deletedUrl = await deleteShortUrl(shortUrlId, userId);
    if (!deletedUrl) {
        throw new Error("URL not found or unauthorized");
    }
    return deletedUrl;
};
