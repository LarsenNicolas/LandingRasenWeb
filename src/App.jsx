import './App.css'
import Footer from "./components/Footer.jsx";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";

function App() {

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-[#343C43]">
                <Navbar/>
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
