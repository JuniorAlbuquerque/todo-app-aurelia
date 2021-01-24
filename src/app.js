export class App {
  heading = 'ToDo App'
  todos = []
  todoDescription = ''

  attached() {
    const getTodos = localStorage.getItem('todos')

    if (getTodos) {
      if (getTodos.length > 0) {
        this.todos = JSON.parse(getTodos)
      }
    }
  }

  saveTodo(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false,
      })
      this.todoDescription = ''

      this.saveTodo(this.todos)
    }

    document.getElementById('input-todo').focus()
  }

  updateTodo(todo) {
    const newTodos = [...this.todos]
    let index = this.todos.indexOf(todo)

    newTodos[index].done = !newTodos[index].done

    this.saveTodo(newTodos)
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo)

    if (index !== -1) {
      this.todos.splice(index, 1)
    }

    this.saveTodo(this.todos)
  }
}
