import AddTodo from "./components/AddTodo/index.js";
import FilterTodos from "./components/FilterTodos/index.js";
import ModalEdit from "./components/ModalEdit/index.js";
import TodosHTML from "./components/TodosHTML/index.js";
import { toogleMenuButton } from './components/functions.js'

class View {
    constructor(){
        this.model = null;
        this.addTodoForm = new AddTodo();
        this.addTodoForm.onClick(todo => this.addTodo(todo));
        this.todosHTML = new TodosHTML(
            id => this.deleteTodo(id),
            id => this.model.toggleCompleted(id),
            id => this.showToEditTodo(id),
        );
        this.modalEdit = new ModalEdit(
            todoToEdit => this.model.editTodo(todoToEdit), 
            todo => this.todosHTML.updateTodo(todo)
        );
        this.filters = new FilterTodos();
        this.filters.onClick((complete, word) => this.filterTodos(complete, word));
        this.show = false;
        toogleMenuButton(this.show);
    }

    setModel(model){
        this.model = model;
    }

    addTodo(todo){
        this.model.addTodo(todo);
        this.filters.input.value = '';
        this.filters.all.checked = true;
        this.filterTodos('All', '');
    }

    async filterTodos(complete, word){
        const todos = await this.model.filterTodos(complete, word);
        this.todosHTML.showTodosHTML(todos);
    }

    async showToEditTodo(id){
        const todo = await this.model.findTodo(Number(id));
        this.modalEdit.createEditModal(todo);
    }

    deleteTodo(id){
        this.model.deleteTodo(id);
        this.todosHTML.deleteTodo(id);
    }
   
}

export default View;
