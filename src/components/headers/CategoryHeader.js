import React from "react";

// Styling
import "../../style/categoryHeader.css";

// Redux
import { connect } from "react-redux";

const CategoryHeader = ({ categories }) => {
  return (
    <ul>
      {categories.map((item) => (
        <li key={item.id} className="parent-li">
          {item.name}
          <ul className="submenu">
            {item.subcategories.map((subitem) => (
              <li key={subitem.id} className="subitem">
                {subitem.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(CategoryHeader);
