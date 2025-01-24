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
import ListBestseller from "./pages/listbestsellers";
import Path from "./component/path";
import Profile from "./component/profile";
import Form from "./component/form";
import Location from "./component/location";
const App =()=> {
  return (
    <>
      
      <BrowserRouter>

        <Routes >
 <Route index element={<><Header /><Navbar /><Searchbar /><Storytech /><ListBestseller /><hr className="border-t-2 border-gray-300 mt-[10%] mb-2 ml-4 sm:ml-12 md:ml-24 lg:ml-[5%] w-[95%] sm:w-[80%] md:w-[85%] lg:w-[90%]" /><ListProduct /><hr className="border-0 mt-12 mb-8 sm:mt-16 sm:mb-10 md:mt-[5%] md:mb-[3%]" /><Footer/> </>}/>
        {/* <Route index element={<><Header /><Navbar /><Searchbar /><Form/> <Footer/></>}/> */}
        <Route path="/login" element={<><Header/><Navbar/><Searchbar/><Path/><Login/><Footer/></>}/>
        <Route path="/signup" element={<><Header/><Navbar/><Searchbar/><Path/><SignUp/><Footer/></>}/>
        <Route path="/profile" element={<><Header/><Navbar/><Searchbar/><Profile/><Footer/></>}/>

        </Routes>


    
    </BrowserRouter>

    </>
  );
}

export default App;
