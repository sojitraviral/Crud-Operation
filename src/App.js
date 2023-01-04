import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import Users from "./Views/Users";
import Viewusers from "./Views/Viewusers";
import AddUser from "./Views/AddUser";
import EditUser from "./Views/EditUser";


function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <BrowserRouter>

        {/* <CounterExample/> */}
        <Header />
        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<Viewusers />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter >

    </div >
  );
}

export default App;
