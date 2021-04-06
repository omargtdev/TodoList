import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    view.setModel(model);
    model.setView(view);
    const filter = view.filters.getInputChecked();
    const word = view.filters.getInputValue();
    view.todosHTML.showTodosHTML(view.filterTodos(filter, word));
})