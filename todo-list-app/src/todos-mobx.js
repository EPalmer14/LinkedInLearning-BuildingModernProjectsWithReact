import { makeAutoObservable } from 'mobx'

class TodosStore {
  todos= [];

  constructor() {
    makeAutoObservable(this);
  }


  createTodo(text) {

  }

  markTodoAsCompleted(text){

  }

  deleteTodo(text){

  }
}

export default new TodosStore();