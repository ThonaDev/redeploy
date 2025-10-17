import { AES, enc } from "crypto-js";
import secureLocalStorage from "react-secure-storage";

export const ENCRYPT_KEY = import.meta.env.VITE_ENCRYPT_KEY;
export const ACCESS_TOKEN_STORAGE_KEY = "encryptedAccessToken";
export const REFRESH_TOKEN_STORAGE_KEY = "encryptedRefreshToken";

const encryptToken = (token) => {
  if (!ENCRYPT_KEY) throw new Error("Encryption key is not defined");
  return AES.encrypt(token, ENCRYPT_KEY).toString();
};

export const storeAccessToken = (accessToken) => {
  const dataEncrypted = encryptToken(accessToken);
  secureLocalStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, dataEncrypted);
};

export const storeRefreshToken = (refreshToken) => {
  const dataEncrypted = encryptToken(refreshToken);
  secureLocalStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, dataEncrypted);
};

export const decryptToken = (encryptedToken) => {
  if (encryptedToken && ENCRYPT_KEY) {
    const decryptedToken = AES.decrypt(encryptedToken, ENCRYPT_KEY);
    return decryptedToken.toString(enc.Utf8);
  }
  return null;
};

export const getDecryptedAccessToken = () => {
  const encryptedToken = secureLocalStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  return decryptToken(encryptedToken);
};

export const getDecryptedRefreshToken = () => {
  const encryptedToken = secureLocalStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
  return decryptToken(encryptedToken);
};

export const clearTokens = () => {
  secureLocalStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  secureLocalStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
};

export const generateSecurePassword = (length = 12) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=";
  const allChars = uppercase + lowercase + numbers + symbols;

  const getRandomChar = (str) => str.charAt(Math.floor(Math.random() * str.length));
  
  let password = 
    getRandomChar(uppercase) +
    getRandomChar(lowercase) +
    getRandomChar(numbers) +
    getRandomChar(symbols);
  
  for (let i = password.length; i < length; i++) {
    password += getRandomChar(allChars);
  }

  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  return password;
};