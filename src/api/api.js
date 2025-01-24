import axios from "axios";
import { useEffect } from "react";
const BASE_URL = "http://localhost:4000/v1";




export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/story/`);
    console.log("Products fetched:", response);
    return response.data;
  } catch (error) {
    console.error("API error (getProducts):", error);
    return null;
  }
};

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
