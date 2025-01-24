import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addCategories,
  addProduct,

  getAllProducts,
  getCategories,
  getProducts,

} from "../api/api";

const ApiContext = createContext(); 

export const ApiProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [Products, setProducts] = useState([]);
  const [response, setResponse] = useState(null); 
  

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      if (products) {
        setProducts(products); // Update state with fetched products
      }
    }
  
    fetchProducts(); // Call the function to fetch data
  }, []);
  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getCategories();
        setCategory(categoryData);
      } catch (error) {
        console.error("API Error (fetchCategories):", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch all products (books)
  useEffect(() => {
    const fetchNewBooks = async () => {
      try {
        const productData = await getAllProducts();
        setNewProducts(productData);
      } catch (error) {
        console.error("API Error (fetchNewBooks):", error);
      }
    };
    fetchNewBooks();
  }, []);

//   // Add a new category
//   const addCat = async (data) => {
//     try {
//       const categoryResponse = await addCategories(data);
//       setResponse(categoryResponse); // You may want to reset this later
//       return categoryResponse;
//     } catch (error) {
//       console.error("API Error (addCat):", error);
//       return null;
//     }
//   };

  // Add a new book (product)
  const addBooksHandler = async (data) => {
    try {
      const bookResponse = await addProduct(data);
      setResponse(bookResponse); // Update the response state
      return bookResponse;
    } catch (error) {
      console.error("API Error (addBooks):", error);
      return null;
    }
  };

  // Add a book to a specific category using its ID
  const addBookToCategory = async (categoryId, data) => {
    try {
      const response = await categoryId(categoryId, data); // You need to pass categoryId as an argument here
      setResponse(response);
      return response;
    } catch (error) {
      console.error("API Error (addBookToCategory):", error);
      return null;
    }
  };

  return (
    <ApiContext.Provider
      value={{
        category,
        newProducts,
        Products,
        // addCat,
        addBooksHandler,
        addBookToCategory,  
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
