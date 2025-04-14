import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-bootstrap";
import Footer from './components/Footer';

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ToastContainer />
        <BrowserRouter basename="/Ideal-Cafe">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cart" element={<div className="pt-4"><Cart /></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
