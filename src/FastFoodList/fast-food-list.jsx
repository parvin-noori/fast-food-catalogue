import React from "react";
import FastFoodItem from "../FastFoodItem/fast-food-item";

export default function FastFoodList({ fastFoodItems }) {

  return (
    <div className="container">
      <div className="row">
        {fastFoodItems.map((item) => {
            let delay = 0.1;
          return(
            <div className="col-md-4 col-sm-6 mb-grid-gutter" key={item.id}>
            <FastFoodItem {...item} delay={delay}/>
          </div>
          )
        
        })}
      </div>
    </div>
  );
}
