import { allToDos } from './to-do-list';

allToDos.createToDo('Paint House', 'paint house white', 'tomorrow', 'high');
allToDos.createToDo('vacuum floor', 'vacuum up dirt', 'Monday', 'medium');


function displayToDos(todos) {
    const content = document.querySelector('#content');
    const toDoDiv = document.createElement('div');

    todos.forEach(item => {
        toDoDiv.textContent += item;
    })

    content.appendChild(toDoDiv);
}

displayToDos(allToDos.toDoList)