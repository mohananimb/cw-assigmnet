import React from "react";
import SearchFilter from "../../components/input-search";
import { useHome } from "./hooks";
import Photos from "../../components/photos";

const Home: React.FC = () => {
  const { handleChange, inputVal, state, dispatch, currentBGImg } = useHome();

  return (
    <div
      style={{
        backgroundPosition: "center center",
        backgroundImage: `url(${currentBGImg})`,
      }}
      className="w-full bg-cover bg-no-repeat p-5 h-screen overflow-auto"
    >
      <SearchFilter handleSearch={handleChange} searchedValue={inputVal} searchPlaceholder="search image" />
      <Photos images={state} handleStarred={dispatch} />
    </div>
  );
};

export default Home;
