import React, { Component } from "react";
import "./App.css";
import List from "../components/List/List";

class App extends Component {
  state = {
    products: [
      {
        id: 0,
        taste: "с фуа-гра",
        portions: 10,
        present: "мышь",
        weight: "0,5",
        selected: false,
        disabled: false,
        onHover: false,
        textSelected: "Печень утки разварная с артишоками.",
        textDisabled: "Печалька, с фуа-гра закончился.",
        textInfo: "",
      },
      {
        id: 1,
        taste: "с рыбой",
        portions: 40,
        present: "2 мыши",
        weight: "2",
        selected: true,
        disabled: false,
        onHover: false,
        textSelected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        textDisabled: "Печалька, с рыбой закончился.",
        textInfo: "",
      },
      {
        id: 2,
        taste: "с курой",
        portions: 100,
        present: "5 мышей",
        weight: "5",
        selected: false,
        disabled: true,
        onHover: false,
        textSelected: "Филе из цыплят с трюфелями в бульоне.",
        textDisabled: "Печалька, с курой закончился.",
        textInfo: "Заказчик доволен",
      },
    ],
  };

  onClick = (event) => {
    let products = this.state.products;

    let itemIndex = this.state.products.findIndex(
      (item) => item.id == event.currentTarget.dataset.id
    );

    let newItem = {
      ...products[itemIndex],
      selected: !products[itemIndex].selected,
      onHover: false,
    };

    this.setState({
      products: [
        ...products.slice(0, itemIndex),
        newItem,
        ...products.slice(itemIndex + 1),
      ],
    });
  };

  onMouseEnter = (evt) => {
    let products = this.state.products;

    let itemIndex = this.state.products.findIndex(
      (item) => item.id == evt.currentTarget.dataset.id
    );

    if (products[itemIndex].selected) {
      let newItem = {
        ...products[itemIndex],
        onHover: true,
      };

      this.setState({
        products: [
          ...products.slice(0, itemIndex),
          newItem,
          ...products.slice(itemIndex + 1),
        ],
      });
    }
  };

  onMouseLeave = (evt) => {
    let products = this.state.products;

    let itemIndex = this.state.products.findIndex(
      (item) => item.id == evt.currentTarget.dataset.id
    );

    let newItem = {
      ...products[itemIndex],
      onHover: false,
    };

    this.setState({
      products: [
        ...products.slice(0, itemIndex),
        newItem,
        ...products.slice(itemIndex + 1),
      ],
    });
  };

  render() {
    return (
      <div className="container">
        <section className="catalog">
          <h1 className="catalog__title">Ты сегодня покормил кота?</h1>
          <List
            data={this.state.products}
            onClick={this.onClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
        </section>
      </div>
    );
  }
}

export default App;
