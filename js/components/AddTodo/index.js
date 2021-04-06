import { validateInputs } from '../functions.js';

class AddTodo {
    constructor(){
        this.titleTask = document.getElementById('todoTitle');
        this.descriptionTask = document.getElementById('todoDescription');
        this.btn = document.getElementById('add');
    }

    onClick(callback){
        this.btn.onclick = (e) => {
            e.preventDefault();
            const newTodo = validateInputs(this.titleTask, this.descriptionTask);

            newTodo
                ? callback(newTodo)
                : null;

            this.titleTask.value = ''
            this.descriptionTask.value = '';
        }

    }
}

export default AddTodo;
