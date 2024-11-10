import React from "react";
// import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";
import MyNavbar from "../../components/Navbar/MyNavbar";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <MyNavbar />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
