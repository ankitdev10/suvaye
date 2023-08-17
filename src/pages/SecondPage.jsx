import React, { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchContext";
import Result from "../Components/Result";
import { Link } from "react-router-dom";
const SecondPage = () => {
  const [playsound, setPlaySound] = useState(false);
  const { data } = useContext(SearchContext);
  return (
    <section className="w-11/12 mt-12 mx-auto lg:w-4/5">
      <h1 className="text-xl font-bold pl-2">Word: {data?.word}</h1>
      <div className="mt-4 border-[3px] border-[#CED9E3] min-h-[60vh] rounded-[35px] p-4 ">
        <Result />
      </div>

      <Link to="/">
        <button className="rounded-xl border-2 px-4 py-1 mt-4 transition-all ease-in-out delay-100 hover:scale-105 hover:-translate-y-1 hover:text-white hover:bg-green-400">
          Go Back
        </button>
      </Link>
    </section>
  );
};

export default SecondPage;
