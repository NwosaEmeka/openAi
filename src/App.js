import { CompaniesLogo, Navbar } from "./components";
import { Hero, WhatisGPT3 } from "./containers";

function App() {
  return (
    <div id="gpt3">
      <Navbar />
      <div className="gradient__bg">
        <Hero />
      </div>
      <div className="container">
        <CompaniesLogo />
        <WhatisGPT3 />
      </div>
    </div>
  );
}

export default App;
