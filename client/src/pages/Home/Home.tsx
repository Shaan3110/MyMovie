import React from "react";
import AutoPlayer from "../../components/AutoPlayer/AutoPlayer";
import Header from "../../components/Header/Landing/Header";
import Listing from "../../components/Listing/Listing";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="section">
        <Header />
        <AutoPlayer />
      </div>
      <Listing />
    </>
  );
}

export default Home;
