import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const itemState = {
      type: "TOGGLE_TOO-DO",
      payload: {
        id: this.props.id
      }
    };
  };

  render() {
    return (
      <div className="ListItem">
        <p
          className={`content ${this.props.state === "pending" ? "" : "red"}`}
          onClick={this.handleClick}
        >
          {this.props.content}
        </p>
        <input
          type="checkbox"
          checked={this.props.state === "pending" ? false : true}
        />
      </div>
    );
  }
}

export default ListItem;

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TOO-DO",
    payload: {
      id
    }
  };
};
