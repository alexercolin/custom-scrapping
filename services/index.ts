import { BASE_URL } from "@/constants";

export const apiFetch = async (endpoint: string, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const finalOptions = { ...defaultOptions, ...options };

  const response = await fetch(url, finalOptions);
  return handleResponse(response);
};

const handleResponse = async (response: any) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};
