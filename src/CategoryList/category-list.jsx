import React, { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";

export default function CategoryList({filterItems}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };
    fetchCategories();
  }, []);
  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {loading ? (
          <Loading theme="primary" />
        ) : (
         <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
           <ul className="nav">
            <li className="nav-item" onClick={()=>filterItems()}>
              <a className="nav-link">
                همه فست فودها
              </a>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category.id} onClick={()=>filterItems(category.id)}>
                <a className="nav-link">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <SearchBar/>
         </div>
        )}
      </div>
    </nav>
  );
}
