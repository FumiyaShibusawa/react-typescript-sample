import * as React from "react"

interface TodoListProps {
  todolist_name: string,
  status: string
}

class TodoList extends React.Component<TodoListProps, {}> {
  render(){
    return (
      <div>
        <ul>
          <li>
            <div>{ this.props.status }</div>
            { this.props.todolist_name }
          </li>
        </ul>
      </div>
    )
  }
}


export default TodoList
