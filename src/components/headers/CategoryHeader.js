import React from "react";

// Styling
import "../../style/categoryHeader.css";

// Redux
import { connect } from "react-redux";

// React-router
import { Link } from "react-router-dom";

const CategoryHeader = ({ categories }) => {
  return (
    <ul>
      {categories.map((item) => (
        <Link
          to={`/${item.name.toLowerCase()}`}
          key={item.id}
          className="parent-li"
        >
          {item.name}
          <ul className="submenu">
            {item.subcategories.map((subitem) => (
              <Link
                to={`${item.name.toLowerCase()}/${subitem.name.toLowerCase()}`}
                key={subitem.id}
                className="subitem"
              >
                {subitem.name}
              </Link>
            ))}
          </ul>
        </Link>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(CategoryHeader);
