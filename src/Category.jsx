import React from "react";
import { useState, useEffect } from "react";
import "../src/styles/MealStyles.css"

function Category() {
  const [categories, setCategories] = useState(null);

  const getData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const result = await response.json();
    // console.log(result);
    setCategories(result);
  };

  console.log(categories);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bodyB">
      <h1>
        <span className="title">Meal categories</span>
      </h1>
      <h2 className="subT">using API to fetch meal categories, pic, and description.</h2>
      {/* <button onClick={getData}>Fetch data</button> */}
      <div className="reuseableComp">
      {categories?.categories?.map((item)=>(
        <div key={item.idCategory}>
          <h2>{item.strCategory}</h2>
          <br/>
          <img src={item.strCategoryThumb} alt="pic"/>        
          <p>{item.strCategoryDescription}</p>
            <br/>
        </div>
     

      )    
    )}</div>

    </div>
  );
}

export default Category;
