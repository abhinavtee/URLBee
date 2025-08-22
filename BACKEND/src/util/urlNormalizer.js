export function normalizeUrl(url) {
  if (!/^https?:\/\//i.test(url)) {
    return "https://" + url;
  }
  return url;
}