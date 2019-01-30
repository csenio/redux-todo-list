import React, { Component } from "react";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: [],
      VisibilityFilter: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    var todoItem = {
      type: "ADD_TODO",
      payload: {
        id: undefined, //list length ++
        content: this.state.content,
        state: "pending"
      }
    };
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <input type="submit" value="new todo item" />
      </form>
    );
  }
}

export default NewItem;

export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: undefined,
    text,
    state: "pending"
  };
};
