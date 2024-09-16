import axios from "axios";
const BASE_URL = "http://localhost:8000/v1";

// Fetch categories
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/category/get`);
    console.log("Categories fetched:", response);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
};

// Fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product/`);
    console.log("Products fetched:", response);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
};

// Add a new category
export const addCategory = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/category/addCategories`, data);
    console.log("Category added:", response);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
};

// Add a new product
export const addProduct = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/books/addBook`, data);
    console.log("Product added:", response);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
};

// Add a book to a specific category (categoryId must be passed as a parameter)
export const addBookToCategory = async (categoryId, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-book/${categoryId}`, data);
    console.log(`Book added to category ${categoryId}:`, response);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
};
