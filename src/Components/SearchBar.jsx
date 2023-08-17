import React, { useContext, useEffect, useRef } from "react";
import SearchIcon from "../assets/search.png";
import { SearchContext } from "../Context/SearchContext";
import { useQuery } from "react-query";
import axios from "axios";
const SearchBar = () => {
  const inputRef = useRef(null);
  const { setData } = useContext(SearchContext);

  const fetchData = async (q) => {
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${q}`
    );
    return res.data;
  };

  const { data, refetch, error } = useQuery(
    "data",
    () => fetchData(inputRef?.current?.value),
    {
      enabled: false,
    }
  );

  const handleFetching = async (e) => {
    if (e.key === "Enter") {
      console.log("hehhe");
      await refetch();
    }
  };

  useEffect(() => {
    if (data) {
      setData(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(error?.response?.data?.title);
    }
  }, [error]);

  return (
    <div className="mt-4 flex items-center space-x-2 border bg-[#CED9E3] rounded-[20px] p-2">
      <img src={SearchIcon} alt="" />
      <input
        type="text"
        placeholder="Press 'Enter' to Search"
        className="w-full outline-none bg-transparent"
        ref={inputRef}
        onKeyPress={handleFetching}
      />
    </div>
  );
};

export default SearchBar;
