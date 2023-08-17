import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import Main from "../Components/Main";
const FirstPage = () => {
  return (
    <div className="relative">
      {/* wrapper div */}
      <div className="w-11/12 mx-auto lg:w-4/5">
        <Navbar />
        <SearchBar />
        <Main />
      </div>
    </div>
  );
};

export default FirstPage;
