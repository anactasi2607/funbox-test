import React, { Component } from "react";
import "./App.css";
import List from "../components/List/List";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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

  render() {
    return (
      <div className="container">
        <section className="catalog">
          <h1 className="catalog__title">Ты сегодня покормил кота?</h1>
          <List data={this.state.products} />
        </section>
      </div>
    );
  }
}

export default App;
