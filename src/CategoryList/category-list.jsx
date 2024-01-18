import React, { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";

export default function CategoryList() {
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
          <ul className="nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                همه فست فودها
              </a>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <a href="" className="nav-link">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
