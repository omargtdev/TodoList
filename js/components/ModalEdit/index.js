import Components from './components.js';

export default class ModalEdit {

    constructor(editTodoCallback, updateTodo){
        this.editTodoCallback = editTodoCallback;
        this.updateTodo = updateTodo;
    }    

    createEditModal(todoToEdit){

        const modal = document.createElement('div');
        modal.className = 'modal'

        const components = new Components(modal);

        const modalContent = document.createElement('div')
        modalContent.className = 'modal-container'
        
        const editContainer = document.createElement('div');
        editContainer.className = 'edit-container';
        const header = components.modalHeader();
        const formEdit = components.formToEdit(todoToEdit, this.editTodoCallback, this.updateTodo);
        
        editContainer.appendChild(formEdit);
        
        modalContent.appendChild(header);
        modalContent.appendChild(editContainer);

        modal.appendChild(modalContent);
    
        document.querySelector('body').appendChild(modal);
    }



}