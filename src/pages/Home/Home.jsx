import React from "react";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";
import MyNavbar from "../../components/Navbar/MyNavbar";

const Home = () => {
  return (
    <>
      <MyNavbar />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
