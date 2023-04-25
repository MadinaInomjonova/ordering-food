import { Route, Routes } from "react-router-dom";

import AllCountries from "./components/allCountries/allCountries";
import CountryInfo from "./components/countryInfo/countryInfo";

import "./App.css";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
