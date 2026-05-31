import { API_BASE } from "../api/axios";

export function getImageUrl(path) {
  if (!path) return "";

  if (path.startsWith("http")) {
    if (/localhost|127\.0\.0\.1/.test(path)) {
      const uploadsPath = path.match(/\/uploads\/[^?#]+/)?.[0];
      if (uploadsPath) return `${API_BASE}${uploadsPath}`;
    }
    return path;
  }

  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function downloadFile(url, filename = "Resume.pdf") {
  if (!url) return;

  const fullUrl = url.startsWith("http")
    ? url
    : `${API_BASE}${url.startsWith("/") ? url : `/${url}`}`;

  try {
    const response = await fetch(fullUrl);
    if (!response.ok) throw new Error("Download failed");

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(blobUrl);
  } catch {
    window.open(fullUrl, "_blank");
  }
}
