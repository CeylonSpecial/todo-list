const toDo = (title, description, dueDate, priority) => {
    const notes = '';
    const checklist = '';
    const project = '';
    const complete = false;
    return { title, description, dueDate, priority, notes, checklist, project, complete };
};

const allToDos = (() => {
    const toDoList = [];
    const projects = [];

    function createToDo(title, description, dueDate, priority) {
        const newToDo = toDo(title, description, dueDate, priority);
        _addToToDos(newToDo);
    }

    function addToProjects(title) {
        projects.push(title)
    }

    function _addToToDos(item) {
        toDoList.push(item);
    }

    function changeCompleteStatus(item) {
        item.complete = !item.complete;
    }

    function removeFromList(item) {
        index = toDoList.indexOf(item);
        toDoList.splice(index, 1);
    }

    return { createToDo, removeFromList, toDoList, addToProjects, changeCompleteStatus }
})();

export { allToDos };