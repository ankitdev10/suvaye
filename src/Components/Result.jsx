import React, { useContext, useEffect, useState } from "react";
import Pause from "../assets/Pause.png";
import Play from "../assets/Play.png";
import { SearchContext } from "../Context/SearchContext";
const Result = () => {
  const { data } = useContext(SearchContext);
  const [definitions, setDefinitions] = useState([]);
  const [tab, setTab] = useState("");
  const [playsound, setPlaySound] = useState(false);
  const { meanings, phonetics } = data || {};

  const audioFile = new Audio(phonetics && phonetics[0]?.audio);
  const playAudio = () => {
    setPlaySound(true);
    audioFile.play();
    audioFile.addEventListener("ended", () => {
      setPlaySound(false);
    });
  };

  //   set tab
  useEffect(() => {
    setPlaySound(false);
    meanings && meanings.length > 0 && setTab(meanings[0]?.partOfSpeech);
  }, [meanings]);

  useEffect(() => {
    const defs = meanings?.find((item) => item?.partOfSpeech === tab);
    setDefinitions(() => defs?.definitions?.slice(0, 3));
  }, [tab, meanings]);

  return (
    <div>
      <header className="flex items-center space-x-1">
        {playsound ? (
          <button>
            <img src={Pause} alt="play" className="w-[60px] h-[60px]" />
          </button>
        ) : (
          <button>
            <img
              src={Play}
              onClick={playAudio}
              alt="play"
              className="w-[60px] h-[60px]"
            />
          </button>
        )}
        <span>{data?.phonetic}</span>
      </header>

      {/* tabs */}
      <div>
        {meanings?.map((item, i) => (
          <button
            className={`${
              tab === item?.partOfSpeech ? "bg-[black]" : "bg-[#DEDEDE]"
            } text-white mr-4 px-3 py-1 font-bold rounded-md`}
            key={i}
            onClick={() => setTab(item?.partOfSpeech)}
          >
            {item?.partOfSpeech}
          </button>
        ))}
      </div>

      <ol className="list-decimal p-4">
        {definitions?.map((item, i) => (
          <li key={i} className="mb-2 font-medium">
            {item?.definition}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Result;
