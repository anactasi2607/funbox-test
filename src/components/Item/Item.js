import React from "react";
import "./Item.css";
import cat from "./cat@1x.png";

function Item(props) {
  return (
    <li
      className={
        "list__item item" +
        " " +
        (props.item.disabled
          ? "disabled"
          : props.item.selected
          ? "selected"
          : "default")
      }
    >
      <div className="item__container">
        <p className="item__text">Сказочное заморское яство</p>
        <h2 className="item__title">
          Нямушка
          <span className="item__taste"> {props.item.taste}</span>
        </h2>
        <span className="item__portions">{props.item.portions} порций</span>
        <span className="item__present">{props.item.present} в подарок</span>
        <span className="item__info">{props.item.textInfo}</span>
      </div>
      <img className="item__img" src={cat} alt="Фото кота"></img>
      <p className="item__bottom-comment">
        {props.item.disabled
          ? props.item.textDisabled
          : props.item.selected
          ? props.item.textSelected
          : "Чего сидишь? Порадуй котэ, купи"}
      </p>
      <div className="item__weight">
        {props.item.weight}
        <span className="item__kg">кг</span>
      </div>
    </li>
  );
}

export default Item;
