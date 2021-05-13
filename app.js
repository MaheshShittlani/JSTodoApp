const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTEmplate = (todo) => {
    const html = `
        <li class="list-group-item text-light todo-item d-flex justify-content-between py-3">
            <span>${todo}</span>
            <i class="fas fa-trash delete"></i>
        </li>
    `;

    todos.innerHTML += html;
};

const filterTodos = (term) => {
    Array.from(todos.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('d-none'));

    Array.from(todos.children)
        .filter(todo => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove('d-none'));
    
};
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    
    generateTEmplate(todo);

    addForm.reset();
});

todos.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


search.addEventListener('keyup', e => {
    const term = e.target.value.trim();
    filterTodos(term);
});

