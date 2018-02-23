import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import todoStore from "../stores/TodoStore";

@observer
class Todos extends Component {
  state = {
    inputVal: ""
  };

  render() {
    const todos = todoStore.todos;

    return (
      <div>
        <ul>
          todos:
          {todos && todos.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
        new todo:
        <input
          type="text"
          value={this.state.inputVal}
          onChange={e => this.setState({ inputVal: e.target.value })}
        />
        <button
          onClick={e => {
            todoStore.addTodo(this.state.inputVal);
            this.setState({ inputVal: "" });
          }}
        >
          save
        </button>
      </div>
    );
  }
}

export default Todos;
