import React from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: []
    }
  }
  render() {
    return  <p>TodoApp</p>
  }
}


document.addEventListener('turbolinks:load',  () => {
  const app = document.getElementById('todo-app')
  app && ReactDOM.render(<TodoApp />, app)
})
