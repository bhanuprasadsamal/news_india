import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="container my-5">
        <h1>Welcome to News India</h1>
        <p>Your trusted source for the latest news.</p>
      </section>
      
      <Footer />
    </div>
  );
};

export default App;
