function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText != '') {
        const taskList = document.getElementById('taskList');

        const taskItem = document.createElement('li');
        taskItem.className = 'taskItem';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function () {
            if (taskItem.style.textDecoration = this.checked) {
                taskItem.style.textDecoration = 'line-through';
            } else {
                taskItem.style.textDecoration = 'none';
            }
        };

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = function () {
            taskItem.remove();
        };

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}