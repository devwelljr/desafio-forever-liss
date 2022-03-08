import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ListCards from "../components/ListCards";
import FixFilters from "../components/FixFilters";

function MainPage() {
  return (
    <main>
      <Header />
      <FixFilters />
      <Carousel />
      <ListCards />
      <Footer />
    </main>
  );
}

export default MainPage;
