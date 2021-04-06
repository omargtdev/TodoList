
class Model {
    constructor(){
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];

    }

    setView(view){
        this.view = view;
    }

    save(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    findTodo(id, index = false){
        return index 
        ? this.todos.findIndex(todo => todo.id === id)
        : this.todos.find(todo => todo.id === id)
    }

   addTodo({ title, description }){
       const todo = {
           id : Date.now(),
           title,
           description,
           completed : false
       }

       this.todos = [...this.todos, todo];
       this.save();
   }

   filterTodos(complete, word){
       if(word !== ''){
        switch (complete) {
            case 'All':
                return this.todos.filter(todo => 
                    todo.title.includes(word) || todo.description.includes(word)
                );
            case 'Completed':
                return this.todos.filter(todo => 
                    (todo.title.includes(word) || todo.description.includes(word))
                    && todo.completed === true 
                );
            case 'Uncompleted':
                return this.todos.filter(todo => 
                    (todo.title.includes(word) || todo.description.includes(word))
                    && todo.completed === false 
                );
        }
       }else{
        switch (complete) {
            case 'All':
                return this.todos;
            case 'Completed':
                return this.todos.filter(todo => todo.completed === true );
            case 'Uncompleted':
                return this.todos.filter(todo => todo.completed === false );
        }
       }
   }

   toggleCompleted(id){
    const todo = this.findTodo(id);
    todo.completed = !todo.completed;
    this.save();
   }

   editTodo(todoToEdit){
      const todoId = this.findTodo(todoToEdit.id, true);
      this.todos[todoId] = todoToEdit;
      this.save();
   }

   deleteTodo(id){
    const index = this.findTodo(id, true);
    this.todos.splice(index, 1)
    this.save();
   }
    
}

export default Model;
