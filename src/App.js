import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/category-list";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fast-food-list";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const filterItems=(categoryId)=>{
    fetchData(categoryId)
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-faded-dark wrapper">
      <Header></Header>
      <CategoryList filterItems={filterItems}/>
      {loading ?<Loading theme="dark"/>:<FastFoodList fastFoodItems={fastFoodItems}/>}
    </div>
  );
}

export default App;
