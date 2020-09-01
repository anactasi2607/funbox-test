import React from "react";
import "../../styles/Item.css";
import cat from "../../assets/cat@1x.png";
import cat2x from "../../assets/cat@2x.png";
import catWeb from "../../assets/cat@1x.webp";
import catWeb2x from "../../assets/cat@2x.webp";

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
      <svg className="item__background" viewBox="-2 -2 320 480">
        <path
          d="M 160,476   
          L 10,476  
          C 10,476 0,476 0,466  
          L 0,45  
          L 45,0  
          L 306,0  
          C 306,0 316,0 316, 6  
          L 316, 466  
          C 316,466 316,476 306,476   
          L 306,476 160,476  
        "
        />
      </svg>
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
        <div className="item__info">
          {props.item.onHover ? (
            <p className="item__text--selected">Котэ не одобряет?</p>
          ) : (
            <p className="item__text">Сказочное заморское яство</p>
          )}

          <h2 className="item__title">
            <span className="item__title-name">Нямушка</span>
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
              href="/#"
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
