import React, { Component } from "react";
import "./App.scss";
import ItemList from "./components/ItemList";
import NewItem from "./components/NewItem";
import Filters from "./components/Filters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
        <NewItem />
        <Filters />
        {/* item list > list item */}
        {/* new item */}
      </div>
    );
  }
}

export default App;
