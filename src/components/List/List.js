import React from "react";
import Item from "../Item/Item";
import "./List.css";

function List(props) {
  return (
    <ul className="list">
      {props.data.map((item) => (
        <Item
          item={item}
          key={item.id}
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
      ))}
    </ul>
  );
}

export default List;
