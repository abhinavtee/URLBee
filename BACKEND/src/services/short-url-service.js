import { getCustomShortUrl, saveShortUrl } from "../dao/short-url-dao.js";
import { generateNanoId } from "../util/helper.js";

export const createShortUrlWithoutUserService = async (url) => {
    const shortcode = generateNanoId(7);
    //Error Handling
    if (!shortcode) throw new Error("Short Url not generayed");
    await saveShortUrl(shortcode, url)
    return shortcode;
};

export const createShortUrlWithUserService = async (url, userId, customShortUrl=null) => {
    const shortcode = customShortUrl || generateNanoId(7);
    
    // Only check for existing custom URL if one is provided
    if (customShortUrl) {
        const exists = await getCustomShortUrl(customShortUrl);
        if (exists) throw new Error("This custom Url already exists");
    }
    
    await saveShortUrl(shortcode, url, userId)
    return shortcode;
}
