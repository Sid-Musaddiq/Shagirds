import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
	

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
