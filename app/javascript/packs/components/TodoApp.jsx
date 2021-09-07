import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this.getTodoItems = this.getTodoItems.bind(this);
  }

  componentDidMount(){
    this.getTodoItems();
  }

  getTodoItems() {
    axios
      .get("/api/v1/todo_items")
      .then(response => {
        const TodoItems = response.data;
        this.setState({ TodoItems });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return  <p>TodoApp</p>
  }
}


document.addEventListener('turbolinks:load',  () => {
  const app = document.getElementById('todo-app')
  app && ReactDOM.render(<TodoApp />, app)
})
