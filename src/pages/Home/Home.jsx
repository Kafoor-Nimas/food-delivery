import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExpoloreMenu from "../../components/ExploreMenu/ExpoloreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExpoloreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
