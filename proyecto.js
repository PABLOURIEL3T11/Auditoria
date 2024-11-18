// app.js

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para crear un nuevo elemento de tarea
const createTaskElement = (taskText) => {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('btn-delete');
    deleteBtn.addEventListener('click', () => removeTask(li));

    li.appendChild(deleteBtn);
    return li;
};

// Función para añadir una tarea
const addTask = () => {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Por favor, escribe una tarea.');
        return;
    }

    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);

    taskInput.value = '';
};

// Función para eliminar una tarea
const removeTask = (taskElement) => {
    taskList.removeChild(taskElement);
};

// Función para añadir tarea con "Enter"
const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
};

// Eventos
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', handleEnterKey);
