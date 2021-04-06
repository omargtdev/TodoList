import Components from './components.js';

export default class TodosHTML {

    constructor(deleteTodoEvent, toggleCheckboxEvent, showToEditTodoEvent){  
        this.deleteTodoEvent = deleteTodoEvent;
        this.toggleCheckboxEvent = toggleCheckboxEvent;
        this.showToEditTodoEvent = showToEditTodoEvent;
        this.table = document.getElementsByTagName('tbody')[0];
    }

    showTodosHTML(todos){
        this.clearHTML();

        for (let i = 0; i < todos.length; i++) {

            const tr = document.createElement('tr');

            const { title, description, id, completed } = todos[i];
    
            const actionsTodo = document.createElement('td');
            const checkTodo = document.createElement('td');
            const btnEdit = Components.createEditBtn(this.showToEditTodoEvent);
            const btnDelete = Components.createDeleteBtn(id, this.deleteTodoEvent);
            const checkbox = Components.createInputCheckbox(id, this.toggleCheckboxEvent)
            
            checkbox.checked = completed;
            tr.dataset.id = id;
    
            tr.innerHTML = `
            <td class="information">${title}</td>
            <td class="information">${description}</td>
        `   
            checkTodo.className = 'check-task';
            checkTodo.appendChild(checkbox)
    
            actionsTodo.className = 'actions-task';
            actionsTodo.appendChild(btnEdit);
            actionsTodo.appendChild(btnDelete);
            
            tr.appendChild(checkTodo);
            tr.appendChild(actionsTodo);
        
            this.table.appendChild(tr);
            
        }
 
    }


    getTodo(id){
        const todos = [...this.table.children]
        return todos.find(el => Number(el.dataset.id) === id);
    }

    updateTodo({id, title, description, completed}){
        const todoToEdit = this.getTodo(id);
        todoToEdit.children[0].textContent = title;
        todoToEdit.children[1].textContent = description;
        todoToEdit.children[2].firstElementChild.checked = completed;
    }

    deleteTodo(id){
    this.getTodo(id).remove();
        //Manera 2
       /*for(const el of this.table.children){
            if(Number(el.dataset.id) === id){
                el.remove();
                break;
            }
        }*/
    }

    clearHTML(){
        while(this.table.firstElementChild){
            this.table.firstElementChild.remove();
        }
    }

    

}

