
export default class FilterTodos {

    constructor(){
        this.all = document.getElementById('allFilter');
        this.completed = document.getElementById('completedFilter');
        this.uncompleted = document.getElementById('uncompletedFilter');
        this.input = document.getElementById('searchFilter');
        this.btn = document.getElementById('search');
    }

    onClick(callback){
        this.btn.onclick = (e) => {
            e.preventDefault();
            callback(this.getInputChecked(), this.getInputValue());
        }
    }

    getInputValue(){
        return this.input.value;
    }

    getInputChecked(){
        switch (true) {
            case this.all.checked:
                return this.all.value === 'on' 
                        ? this.all.previousElementSibling.textContent 
                        : this.all.value;
            case this.completed.checked:
                return this.completed.value === 'on' 
                        ? this.completed.previousElementSibling.textContent 
                        : this.completed.value;
            case this.uncompleted.checked:
                return this.uncompleted.value === 'on' 
                        ? this.all.previousElementSibling.textContent 
                        : this.uncompleted.value;
            default:
                return this.all.value === 'on' 
                        ? this.all.previousElementSibling.textContent 
                        : this.all.value;
        }
    }
}