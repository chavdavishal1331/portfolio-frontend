import { API_BASE } from "../api/axios";

function appendCacheBust(url, cacheKey) {
  if (!cacheKey) return url;
  const v = encodeURIComponent(String(cacheKey));
  return `${url}${url.includes("?") ? "&" : "?"}v=${v}`;
}

export function getImageUrl(path, cacheKey) {
  if (!path) return "";

  const base = API_BASE.replace(/\/$/, "");

  if (path.startsWith("http")) {
    if (/localhost|127\.0\.0\.1/.test(path)) {
      const uploadsPath = path.match(/\/uploads\/[^?#]+/)?.[0];
      if (uploadsPath) return appendCacheBust(`${base}${uploadsPath}`, cacheKey);
    }
    return appendCacheBust(path, cacheKey);
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return appendCacheBust(`${base}${normalized}`, cacheKey);
}
