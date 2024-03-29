import React from 'react';
import {CATEGORIES} from "../../constant";
import {NavLink} from "react-router-dom";
import './Categories.css';

const Categories = ({onClick}) => (
  <ul className="list">
    {
      CATEGORIES.map(category => (
        <li key={'cate' + category.id}>
          <NavLink to={category.id ? '/quotes/' + category.id : '/'} onClick={() => onClick(category.id)}>
            {category.title}
          </NavLink>
        </li>
      ))
    }
  </ul>
);

export default Categories;