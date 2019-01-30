import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = filterType => {
    var filter = {
      type: "SET_VISIBILITY_FILTER",
      payload: {
        filter: filterType
      }
    };
  };

  render() {
    return (
      <ul className="filter">
        <li>
          <button onClick={() => this.handleClick("all")}>Show All</button>
        </li>
        <li>
          <button onClick={() => this.handleClick("completed")}>
            Show completed
          </button>
        </li>
        <li>
          <button onClick={() => this.handleClick("active")}>
            show active
          </button>
        </li>
      </ul>
    );
  }
}

export default Filter;

export const visibilityFilter = filterType => {
  return { type: "SET_VISIBILITY_FILTER", payload: { filter: filterType } };
};
