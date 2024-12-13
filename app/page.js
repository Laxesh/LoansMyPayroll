"use client";

import ApplyLoans from "./components/LandingPage/ApplyLoans";
import LoansPayroll from "./components/LandingPage/LoansPayroll";
import Step from "./components/LandingPage/Step";
import ClientSay from "./components/LandingPage/ClientSay";
import LoanManagement from "./components/LandingPage/LoanManagement";
import Blog from "./components/LandingPage/Blog";
import Last from "./components/LandingPage/Last";
import { useEffect, useState } from "react";
import Demo from "./components/demo";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 6400);
  }, []);

  return (
    <>
      {animate ? (
        <div className="fixed top-0 left-0 w-full h-full z-10">
          <Demo />
        </div>
      ) : (
        <div>
          <Header />
          <ApplyLoans />
          <LoansPayroll />
          <Step />
          <ClientSay />
          <LoanManagement />
          <Blog />
          <Last />
          <Footer />
        </div>
      )}
    </>
  );
}
