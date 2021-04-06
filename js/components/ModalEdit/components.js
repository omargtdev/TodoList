import { validateInputs } from '../functions.js';

export default class Components {
    
    constructor(modal){
        this.modal = modal;
    }

    modalHeader(){
        const header = document.createElement('header');
        header.innerHTML = `<span>Edit Todo</span>`

        const btn = document.createElement('button');
        btn.className = 'close-modal';
        btn.textContent = 'X';
        btn.onclick = () => this.removeModal();

        header.appendChild(btn);

        return header;
    }

    removeModal(){
        this.modal.remove();
    }

    formToEdit(todoToEdit, editCallback, updateCallback){
        const form = document.createElement('form');
        const { title, description, completed } = todoToEdit
        const btnSave = this.btnSave(todoToEdit, editCallback, updateCallback);

        form.innerHTML = `
            <div class="form-edit-group">
              <label for="title-edit">Title:</label>
              <input id="title-edit" value="${title}">
            </div>
            <div class="form-edit-group">
              <label for="description-edit">Description:</label>
              <textarea id="description-edit">${description}</textarea>
            </div>
            <div class="form-edit-group">
              <label for="completed-edit">Completed:</label>
              <input type="checkbox" id="completed-edit" ${completed ? 'checked' : ""}>
            </div>
        `
        form.appendChild(btnSave);

        return form;
    }

    getValueInputsToEdit({ title, description, id, completed }){
        const titleInput = document.getElementById('title-edit');
        const descriptionInput = document.getElementById('description-edit');
        const completedTodo = document.getElementById('completed-edit').checked;

        const getValues = validateInputs(titleInput, descriptionInput);

        if(getValues){
          if(title !== getValues.title || 
            description !== getValues.description || 
            completed !== completedTodo ){
            return {
                id,
                ...getValues,
                completed : completedTodo
            }
          } 
          return null;
        }

        return null;
    }

    btnSave(todoToEdit, editCallback, updateCallback){

        const containerBtn = document.createElement('div');
        containerBtn.className = 'form-edit-btn';

        const btn = document.createElement('button');
        btn.textContent = 'Save';
        btn.type = 'submit'
        btn.className = 'btn-save';
        btn.onclick = (e) => {
            e.preventDefault();
            const todoEdited = this.getValueInputsToEdit(todoToEdit);
            if(todoEdited){
                editCallback(todoEdited);
                updateCallback(todoEdited)
                this.removeModal();
            }
        }

        containerBtn.appendChild(btn)

        return containerBtn;
    }


}