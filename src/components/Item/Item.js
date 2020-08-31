import React from "react";
import "./Item.css";
import cat from "./cat@1x.png";
import cat2x from "./cat@2x.png";
import catWeb from "./cat@1x.webp";
import catWeb2x from "./cat@2x.webp";

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
      <div
        className={
          "item__container " +
          "container-" +
          (props.item.disabled
            ? "disabled"
            : props.item.selected
            ? "selected"
            : "default")
        }
        data-id={props.item.id}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        {/* <svg class="svg2">
          <polygon class="x2" points="0,45 45,0 320,0 320,480 0,480" />
        </svg>
        <svg class="svg1">
          <polygon class="x1" points="0,45 45,0 320,0 320,480 0,480" />
        </svg> */}
        <div className="item__info">
          {props.item.onHover ? (
            <p className="item__text--selected">Котэ не одобряет?</p>
          ) : (
            <p className="item__text">Сказочное заморское яство</p>
          )}

          <h2 className="item__title">
            Нямушка
            <span className="item__taste"> {props.item.taste}</span>
          </h2>
          <span className="item__portions">{props.item.portions} порций</span>
          <span className="item__present">{props.item.present} в подарок</span>
          <span className="item__complement">{props.item.textInfo}</span>
        </div>

        <picture>
          <source
            srcSet={catWeb + " 1x," + catWeb2x + " 2x"}
            type="image/webp"
          ></source>
          <img
            className="item__img"
            src={cat}
            srcSet={cat2x + " 2x"}
            width="312px"
            height="265px"
            alt="Фото кота"
          ></img>
        </picture>

        <div className="item__weight">
          {props.item.weight}
          <span className="item__kg">кг</span>
        </div>
      </div>
      <p className="item__bottom-comment">
        {props.item.disabled ? (
          props.item.textDisabled
        ) : props.item.selected ? (
          props.item.textSelected
        ) : (
          <span>
            Чего сидишь? Порадуй котэ,{" "}
            <a
              href="#"
              className="item__link"
              data-id={props.item.id}
              onClick={props.onClick}
            >
              купи
            </a>
          </span>
        )}
      </p>
    </li>
  );
}

export default Item;
