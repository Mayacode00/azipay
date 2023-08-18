import React from "react";
import "./payment.css";
import Fragment from "../../assets/Frame 25.svg";
import Frame from "../../assets/Frame 4.svg";
import Appstore from "../../assets/appstore.svg";
import Google from "../../assets/google.svg";

const Payment = () => {
  return (
    <div className="app__payment">
      <img src={Fragment} alt="fragment" />
      <div className="app__payment-container">
        <div className="app__payment-subscription">
          <h2>
            Free forever for your <span>salary payment</span>
          </h2>
          <div className="app__payment-container_download">
            <p>Subscribe to the Eazilife today</p>
            <div className="app__payment-container_download-options">
              <div className="image">
                <img src={Appstore} />
              </div>
              <div className="image">
                <img src={Google} className="google" />
              </div>
            </div>
          </div>
        </div>
        <div className="app__payment-image">
          <img src={Frame} alt="achievement" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
