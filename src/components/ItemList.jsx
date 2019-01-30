import React, { Component } from "react";
import ListItem from "./ListItem";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "bring out trash", state: "completed" },
        { id: 2, content: "clean the house", state: "pending" },
        { id: 3, content: "make food", state: "pending" }
      ]
    };
  }
  render() {
    return (
      <div className="ItemList">
        {this.state.todos.map(todo => {
          return (
            <ListItem
              key={todo.id}
              id={todo.id}
              content={todo.content}
              state={todo.state}
            />
          );
        })}
      </div>
    );
  }
}

export default ItemList;
