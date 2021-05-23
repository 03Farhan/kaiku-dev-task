import { useState } from "react";
import IncomingStartups from "./pages/IncomingStartups";
import OnboardStartups from "./pages/OnboardStartups";

const data = require("./data/data.json");
console.log(data);

const App = () => {
  const [currentPage, setCurrentPage] = useState("onboard");

  let page;
  if (currentPage === "onboard") {
    page = <OnboardStartups />;
  } else if (currentPage === "incoming") {
    page = <IncomingStartups />;
  }

  return (
    <div className="app">
      <div className="app-navbar">
        <h1>Kaiku Dev Challenge</h1>
        <div
          className={
            currentPage === "onboard"
              ? "navbar-link navbar-link-active"
              : "navbar-link"
          }
          onClick={() => setCurrentPage("onboard")}
        >
          Onboard Startups
        </div>
        <div
          className={
            currentPage === "incoming"
              ? "navbar-link navbar-link-active"
              : "navbar-link"
          }
          onClick={() => setCurrentPage("incoming")}
        >
          Incoming Startups
        </div>
      </div>
      {page}
    </div>
  );
};

export default App;
