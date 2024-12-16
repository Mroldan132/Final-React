import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/create-user`, userData, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error en el registro");
  }
};

export const signInUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error en el inicio de sesión");
  }
};
