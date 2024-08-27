document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
}
document.getElementById('task-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('complete-btn')) {
        const taskItem = e.target.parentElement.parentElement;
        taskItem.classList.toggle('completed');
    }
});
document.getElementById('task-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.parentElement.parentElement;
        taskItem.remove();
    }
});
document.getElementById('task-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const taskItem = e.target.parentElement.parentElement;
        const taskText = taskItem.querySelector('span');
        const newTask = prompt('Edit your task', taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
        }
    }
});
document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.task-item').forEach(task => {
            switch (filter) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? '' : 'none';
                    break;
                case 'pending':
                    task.style.display = !task.classList.contains('completed') ? '' : 'none';
                    break;
            }
        });
    });
});
