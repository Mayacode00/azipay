import React from "react";
import "./wallet.css";
import Eye from "../../assets/eye.svg";

const Wallet = () => {
  return (
    <div className="app__wallet">
      <div className="app__wallet-background">
        <div>
          <p>wallet balance</p>
          <div className="app__wallet-stats">
            <h1>
              N12,560,078.00{" "}
              <span>
                <img src={Eye} alt="eye"/>
              </span>
            </h1>
            <button>fund wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
