

export default class Components {

    static createEditBtn(editEvent){
        const btn = document.createElement('button');
        btn.className = 'btn-edit';
        btn.innerHTML = '<i class="fas fa-edit"></i>';
        btn.onclick = () => {
            const todoToEdit = btn.parentNode.parentNode.dataset.id;
            editEvent(todoToEdit);
         }
    
        return btn;
    }

    static createDeleteBtn(id, deleteEvent){
        const btn = document.createElement('button');
        btn.className = 'btn-delete';
        btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        btn.onclick = () => {
            const isDelete = confirm('Are you sure of delete this task?');
            isDelete ? deleteEvent(id) : null;
        }
        
        return btn;
    }

    static createInputCheckbox(id, changeEvent){
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.onchange = () =>  changeEvent(id);

        return input;
    }

}