import React from "react";
import Categories from "../container/Categories";
import { Link } from "react-router-dom";
import Authors from "../container/Authors";

export default function Aside() {
  return (
    <aside>
      <div className="logo">
        <h1>
          <Link to="/">Bookr</Link>
        </h1>
      </div>
      <div className="sidebar-content">
        <div className="btn-container">
          <button type="button">
            <Link to="/new-book">Add book</Link>
          </button>
        </div>
        <div className="fav-authors">
          <h3 className="fav-title">Favourite Authors</h3>
          <ul>
            <li>
              <a href="/">John Grisham</a>
            </li>
            <li>
              <a href="/">Robin Cook</a>
            </li>
            <li>
              <a href="/">Sir Arthur Conan Doyle</a>
            </li>
            <li>
              <a href="/">Jeffery Deaver</a>
            </li>
            <li>
              <a href="/">Michael Connelly</a>
            </li>
          </ul>
        </div>
        <div className="category-container">
          <h3 className="category-title">Categories</h3>
          <Categories />
        </div>
      </div>
    </aside>
  );
}
