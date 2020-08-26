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
        textSelected: "Филе из цыплят с трюфелями в бульоне.",
        textDisabled: "Печалька, с курой закончился.",
        textInfo: "Заказчик доволен",
      },
    ],
  };

  onClick = (event) => {
    let products = this.state.products;
    console.log(event.currentTarget.dataset.id);
    let itemIndex = this.state.products.findIndex(
      (item) => item.id == event.currentTarget.dataset.id
    );

    let newItem = {
      ...products[itemIndex],
      selected: !products[itemIndex].selected,
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
          {/* <svg class="svg2">
            <polygon
              class="x2"
              points="54,47.5 89.5,24 118.5,24 118.5,116 54,116"
            />
          </svg>
          <svg class="svg1">
            <polygon
              class="x1"
              points="50,47.5 87.5,20 122.5,20 122.5,120 50,120"
            />
          </svg> */}

          <h1 className="catalog__title">Ты сегодня покормил кота?</h1>
          <List data={this.state.products} onClick={this.onClick} />
        </section>
      </div>
    );
  }
}

export default App;
