import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

import Logo from "../assets/share.png";
import { useNavigate } from "react-router-dom";
import Result from "./Result";

const Main = () => {
  const { data, error } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!data) {
      alert("Please seach something first to see the next page");
    } else {
      navigate("/second");
    }
  };
  return (
    <section className="mt-4 border-[3px] border-[#CED9E3] min-h-[60vh] rounded-[35px] p-4 relative">
      {!error && !data && (
        <h1 className="text-center font-bold text-2xl">
          Try searching for a word and hit 'Enter'
        </h1>
      )}

      {data && <Result />}

      <img
        onClick={handleNavigate}
        className="absolute w-[250px] bottom-0 cursor-pointer"
        src={Logo}
        alt=""
      />
    </section>
  );
};

export default Main;
