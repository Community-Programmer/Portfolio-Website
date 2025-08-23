import type { ContactFormSchema } from "@/validation/contactSchema";
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1`;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const sendMessage = async (data: ContactFormSchema) => {
  return apiClient.post("/contact", data);
};
