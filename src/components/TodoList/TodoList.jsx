import { Component } from "react";

import "./TodoList.css";

class TodoList extends Component {
  constructor() {
    super();
    this.state = { newTask: "", list: [] };
  }

  addToList = () => {
    if (!this.state.newTask) return;

    this.setState({
      list: [this.state.newTask, ...this.state.list],
      newTask: "",
    });
  };

  render() {
    return (
      <div className="todo-container">
        <div>
          <input
            onChange={(e) =>
              this.setState({ ...this.state, newTask: e.target.value })
            }
            type="text"
            placeholder="Enter new task..."
            value={this.state.newTask}
          />
          <button onClick={this.addToList}>Add</button>
        </div>
        <ul>
          {this.state.list.map((curr) => (
            <li key={curr}>{curr}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
