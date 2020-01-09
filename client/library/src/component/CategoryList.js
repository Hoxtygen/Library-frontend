import React, { Fragment } from "react";
import SingleCategory from "./SingleCategory";

export default function CategoryList(props) {
  return (
    <Fragment>
      <div className="category-container">
          {props.categories.map(category => {
          return (
              <SingleCategory
              category={category.category_name}
              key={category.category_id}
            />
          );
        })}
      </div>
    </Fragment>
  );
}
