import React from "react";
import "./landing.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../containers/Header/header";
import Payroll from "../../containers/Payroll/payroll";
import Works from "../../containers/Works/works";
import Payment from "../../containers/Payment/payment";
import Demo from "../../containers/Demo/demo";
import Footer from "../../components/Footer/footer";

const Landing = () => {
  return (
    <>
      <div className="app__page-header">
        <Navbar />
        <Header />
        <Payroll />
      </div>
      <Works />
      <div className="app__page-payment">
        <Payment />
      </div>
      <Demo />
      <Footer />
    </>
  );
};

export default Landing;
