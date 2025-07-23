import axiosInstance from "../utils/axios-Instance.js";


export const createShortUrl = async (url, customShortUrl) => {
    const { data } = await axiosInstance.post("/create", { url, customShortUrl });
    return data.shortUrl;
}

export const deleteShortUrl = async (urlId) => {
    const { data } = await axiosInstance.delete(`/create/${urlId}`);
    return data;
}
