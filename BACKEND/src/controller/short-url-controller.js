import { findUrlfromShortUrl } from "../dao/short-url-dao.js";
import {
  createShortUrlWithoutUserService,
  createShortUrlWithUserService,
  deleteShortUrlService,
} from "../services/short-url-service.js";
import { wrapAsync } from "../util/tryCatchWrapper.js";

const baseUrl = (process.env.APP_URL || "http://localhost:5000").replace(/\/$/, "");


export const createShortUrl = wrapAsync(async (req, res) => {
  const data = req.body;
  let shortUrl;
  if (req.user) {
    shortUrl = await createShortUrlWithUserService(
      data.url,
      req.user._id,
      data.customShortUrl
    );
  } else {
    shortUrl = await createShortUrlWithoutUserService(data.url);
  }
  res.status(200).json({ shortUrl: `${baseUrl}/${shortUrl}` });
});

export const createShortUrlAfterAuth = wrapAsync(async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithUserService(url, req.user._id);
  res.status(200).json({ shortUrl: `${baseUrl}/${shortUrl}` });
});

export const redirectFromShortUrl = wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const url = await findUrlfromShortUrl(id);
  if (!url) throw new Error("Short Url not found");
  res.redirect(url.full_url);
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
  const { url, customShortUrl, userId } = req.body;
  const shortUrl = await createShortUrlWithUserService(
    url,
    userId,
    customShortUrl
  );
  res.status(200).json({ shortUrl: `${baseUrl}/${shortUrl}` });
});

export const deleteShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  await deleteShortUrlService(id, req.user._id);
  res.status(200).json({ message: "URL deleted successfully" });
});
