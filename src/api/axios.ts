import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig } from "axios";

const interceptor = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
});

let cachedToken: string | null = null;

export const getTokenFromCookies = (): string | null => {
  if (cachedToken) return cachedToken;

  if (typeof document === "undefined") return null;

  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("userData="));
  if (!cookie) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
    cachedToken = parsed.token || null;
    return cachedToken;
  } catch (err) {
    console.error("Invalid userData cookie:", err);
    return null;
  }
};

/** ---- Request Interceptor ---- */
interceptor.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getTokenFromCookies();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/** ---- Response Interceptor ---- */
interceptor.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 498 || status === 401) {
      console.warn("Session expired");
      cachedToken = null; // clear cache
      clearAuthUser();
      sessionStorage.clear();
      showToast({
        title: "Session Expired",
        message: "Your session has expired. Please log in again.",
        type: "error",
      });
      // signOut({ callbackUrl: "/sign-in" });
    } else if (status === 403) {
      showToast({
        title: "Access Denied",
        message: String(error.response?.data?.message || "Forbidden"),
        type: "error",
      });
    }

    return Promise.reject(error);
  }
);

export { interceptor };
