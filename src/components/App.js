import React, { Component } from "react";
import "./App.css";
import Button from "./Button";

class App extends Component {
  state = { buy: 0, sell: 0, disabled: true };

  handleChangeBuy = e => {
    this.setState({ buy: parseInt(e.target.value) });
  };
  handleChangeSell = e => {
    this.setState({ sell: parseInt(e.target.value) });
  };

  handleAddChangeBuy = () => {
    if (this.state.buy < 1000) {
      this.setState({ buy: this.state.buy + 50 });
    } else if (this.state.buy >= 1000 && this.state.buy < 10000) {
      this.setState({ buy: this.state.buy + 100 });
    } else if (this.state.buy >= 10000 && this.state.buy < 99999) {
      this.setState({ buy: this.state.buy + 250 });
    } else if (this.state.buy >= 100000 && this.state.buy < 999999) {
      this.setState({ buy: this.state.buy + 1000 });
    }
  };

  handleAddChangeSell = () => {
    if (this.state.sell < 1000) {
      this.setState({ sell: this.state.sell + 50 });
    } else if (this.state.sell >= 1000 && this.state.sell <= 10000) {
      this.setState({ sell: this.state.sell + 100 });
    } else if (this.state.sell >= 10000 && this.state.sell <= 99999) {
      this.setState({ sell: this.state.sell + 250 });
    } else if (this.state.sell >= 100000 && this.state.sell <= 999999) {
      this.setState({ sell: this.state.sell + 1000 });
    }
  };

  handleSubtractChangeBuy = () => {
    if (this.state.buy <= 0) {
      this.setState({ buy: 0 });
    } else if (this.state.buy <= 1000) {
      this.setState({ buy: this.state.buy - 50 });
    } else if (this.state.buy >= 1000 && this.state.buy <= 10000) {
      this.setState({ buy: this.state.buy - 100 });
    } else if (this.state.buy >= 10000 && this.state.buy <= 99999) {
      this.setState({ buy: this.state.buy - 250 });
    } else if (this.state.buy >= 100000 && this.state.buy <= 999999) {
      this.setState({ buy: this.state.buy - 1000 });
    }
  };

  handleSubtractChangeSell = () => {
    if (this.state.sell <= 0) {
      this.setState({ sell: 0 });
    } else if (this.state.sell < 1000) {
      this.setState({ sell: this.state.sell - 50 });
    } else if (this.state.sell >= 1000 && this.state.sell <= 10000) {
      this.setState({ sell: this.state.sell - 100 });
    } else if (this.state.sell >= 10000 && this.state.sell <= 99999) {
      this.setState({ sell: this.state.sell - 250 });
    } else if (this.state.sell >= 100000 && this.state.sell <= 999999) {
      this.setState({ sell: this.state.sell - 1000 });
    }
  };

  render() {
    const { buy, sell } = this.state;
    const zysk = (sell - sell * 0.05).toFixed(0) - buy;

    return (
      <div>
        <h1>FIFA KALKULATOR</h1>
        <p>Kupno</p>
        <Button
          disabled={this.state.buy === 0 ? true : false}
          content="-"
          click={this.handleSubtractChangeBuy}
        />
        <input type="number" value={buy} onChange={this.handleChangeBuy} />
        <Button content="+" click={this.handleAddChangeBuy} />
        <p>Sprzedaż</p>
        <Button
          disabled={this.state.sell === 0 ? true : false}
          content="-"
          click={this.handleSubtractChangeSell}
        />
        <input type="number" value={sell} onChange={this.handleChangeSell} />
        <Button content="+" name="buy" click={this.handleAddChangeSell} />
        <h3>Wartość podatku : {(buy * 0.05).toFixed(0)}</h3>
        <h3>Wartość sprzedaży : {(buy - buy * 0.05).toFixed(0)}</h3>
        <h3>Sprzedaj za minimum : {(buy / 0.95).toFixed(0)}</h3>
        <h3>Zysk : {zysk}</h3>
      </div>
    );
  }
}

export default App;
