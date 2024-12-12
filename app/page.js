import ApplyLoans from "./components/LandingPage/ApplyLoans";
import LoansPayroll from "./components/LandingPage/LoansPayroll";
import Step from "./components/LandingPage/Step";
import ClientSay from "./components/LandingPage/ClientSay";
import LoanManagement from "./components/LandingPage/LoanManagement";
import Blog from "./components/LandingPage/Blog";
import Last from "./components/LandingPage/Last";

export default function Home() {
  return (
    <>
      <ApplyLoans />
      <LoansPayroll />
      <Step />
      <ClientSay />
      <LoanManagement />
      <Blog />
      <Last />
    </>
  );
}
