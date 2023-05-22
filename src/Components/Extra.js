import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortProduct, filterRating } from "../features/product/productSlice";

const Extra = () => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(sortProduct(e.target.value));
  }

  function handleCategoryChange(event, ratings) {
    let updatedRatings = [...selectedRatings];
    if (event.target.checked) {
      updatedRatings.push(ratings);
    } else {
      updatedRatings = updatedRatings.filter(
        (updatedRatings) => updatedRatings !== ratings
      );
    }
    
    setSelectedRatings(updatedRatings);
    
  }

  useEffect(() => {
    dispatch(filterRating({ rating: selectedRatings }));
  }, [dispatch, selectedRatings]);
  return (
    <div className="box">
      <div className="star_Rating">
        <h4>Customer Rating</h4>
        {[3, 4, 5].map((n) => (
          <div className="checkBox">
            <input
              type="checkbox"
              value={n}
              onChange={(event) => handleCategoryChange(event, n)}
            />
            <label>{n} & above</label>
            <br />
          </div>
        ))}
      </div>

      <div className="sortContainer">
        <h4> Sort By Price: </h4>

        <div className="sortingBox" onChange={handleChange}>
          <input type="radio" name="option" value="low-price" /> Low to High
          <input type="radio" name="option" value="High-price" /> High to Low
        </div>
      </div>
      <div className="sort"></div>
    </div>
  );
};

export default Extra;
