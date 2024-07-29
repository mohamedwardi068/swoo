import React from "react";


import Header from "./component/Header";
import Navbar from "./component/navbar";

import Searchbar from "./component/Searchbar";
import Storytech from "./component/storytech";
import ListProduct from "./pages/listproduct";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./component/footer";
const App =()=> {
  return (
    <>
      
      <BrowserRouter>

        

        
        <Routes >
        <Route index element={<><Header />
      <Navbar />
      <Searchbar />
      <Storytech />
      <ListProduct />
      <hr className="ml-[25%] border-t-2 border-gray-300  mt-[10%]" />
      <ListProduct />
      <Footer/>
      </>}
      />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        </Routes>


    
    </BrowserRouter>
    </>
  );
}

export default App;
