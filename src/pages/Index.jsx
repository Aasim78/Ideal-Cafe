import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import PopularDishes from "../components/PopularDishes";
import Testimonials from "../components/Testimonials";
import Offers from "../components/Offers";
import IceCreamOfDay from "../components/IceCreamOfDay";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-5">
        <Hero />
        <PopularDishes />
        <IceCreamOfDay />
        <Testimonials />
        <Offers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
