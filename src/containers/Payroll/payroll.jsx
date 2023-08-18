import React from "react";
import "./payroll.css";
import Heading from "../../components/Heading/heading";
// import { motion, AnimatePresence } from "framer-motion";

const Payroll = () => {
  return (
    <div className="app__payroll" id="individual">
      <div className="app__payroll-background">
        <div className="app__payroll-header">
          <Heading
            title="For Individuals and Businesses"
            subtext="Join 200+ businesses using Eazipay's easy solution."
            titleFontSize="64px"
            subtextFontSize="20px"
            color="#292a29"
          />
        </div>
        <div className="app__payroll-container">
          <div className="app__payroll-box box1">
            <div className="overlay">
              <h3>Tamper-proof Payroll for LIfe</h3>
              <p>Your staff payroll history is kept in one place forever.</p>
              <p>Payment is done permanently.</p>
              <p>Download your payroll history anytime you need it.</p>
            </div>
          </div>
          <div className="app__payroll-box box2">
            <div className="overlay">
              <h3>All Payroll, Anytime Anywhere</h3>
              <p>
                Wherever you are Eazipay has got you covered on ALL your Payroll
                tasks.
              </p>
              <p>
                Whether it is Taxes, Pension insurances HMOs, trustfunds,
                Eazipay handle all your compliamces in one place and easily, in
                seconds!
              </p>
            </div>
          </div>
          <div className="app__payroll-box box3">
            <div className="overlay">
              <h3>Payroll in Seconds</h3>
              <p>Never again wil you spend more than 2 minutes on payroll.</p>
              <p>Just click on your staff annd bulk-pay them at once.</p>
              <p>Payment is done permanently.</p>
            </div>
          </div>
        </div>
        <div className="app__payroll-note">
          <p>
            We are happy to answer your queries. Please, reach us at{" "}
            <span>hello@myeazipay.com</span> and expect our response shortly
            after.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
