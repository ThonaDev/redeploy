import { AES, enc } from "crypto-js";
import secureLocalStorage from "react-secure-storage";

// set up mechanism of encrypting and decrypting token
export const ENCRYPT_KEY = import.meta.env.VITE_ENCRYPT_KEY;

// Better storage keys (fixed strings instead of using ENCRYPT_KEY as key)
export const ACCESS_TOKEN_STORAGE_KEY = "encryptedAccessToken";
export const REFRESH_TOKEN_STORAGE_KEY = "encryptedRefreshToken";

// set up encrypt with crypto-js to encrypt token
const encryptToken = (token) => {
  const dataEncrypted = AES.encrypt(token, ENCRYPT_KEY).toString();
  console.log("dataEncrypted: ", dataEncrypted);
  return dataEncrypted;
};

// stored accessToken
export const storeAccessToken = (accessToken) => {
  console.log("accessToken: ", accessToken);
  const dataEncrypted = encryptToken(accessToken);
  console.log("===?", dataEncrypted);
  secureLocalStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, dataEncrypted);
};

// NEW: store refreshToken (similar to accessToken)
export const storeRefreshToken = (refreshToken) => {
  console.log("refreshToken: ", refreshToken);
  const dataEncrypted = encryptToken(refreshToken);
  secureLocalStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, dataEncrypted);
};

// decrypt token (generic helper)
export const decryptToken = (encryptedToken) => {
  if (encryptedToken) {
    const decryptedToken = AES.decrypt(encryptedToken, ENCRYPT_KEY);
    return decryptedToken.toString(enc.Utf8);
  }
  return null;
};

// get Decrypted access token
export const getDecryptedAccessToken = () => {
  const encryptedToken = secureLocalStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  console.log("The encrypted access token: ", encryptedToken);
  if (encryptedToken) {
    return decryptToken(encryptedToken);
  }
  return null;
};

// NEW: get Decrypted refresh token
export const getDecryptedRefreshToken = () => {
  const encryptedToken = secureLocalStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
  console.log("The encrypted refresh token: ", encryptedToken);
  if (encryptedToken) {
    return decryptToken(encryptedToken);
  }
  return null;
};

// NEW: Clear all tokens from storage (for logout)
export const clearTokens = () => {
  secureLocalStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  secureLocalStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
  console.log("Tokens cleared from secure storage.");
};