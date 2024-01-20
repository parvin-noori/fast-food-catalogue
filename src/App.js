import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/category-list";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fast-food-list";
import SearchBar from "./SearchBar/searchBar";

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

  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };
  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    if(fastFoodItems.length===0){
      return(
        <>
        <div className="alert alert-warning text-center">برای کلید واژه فوق هیچ واژه ای یافت نشد</div>
        </>
      )
    }

    return <FastFoodList fastFoodItems={fastFoodItems}/>
  };
  return (
    <div className="bg-faded-dark wrapper">
      <Header></Header>
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4 ">{renderContent()}</div>
    </div>
  );
}

export default App;
