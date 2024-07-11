        const taskList = document.getElementById('taskList');

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();
            if (taskText) {
                const li = document.createElement('li');
                li.textContent = taskText;
                li.innerHTML += ' <button onclick="editTask(this)">Edit</button>';
                li.innerHTML += ' <button onclick="deleteTask(this)">Delete</button>';
                taskList.appendChild(li);
                taskInput.value = '';
            }
        }

        function editTask(button) {
            const li = button.parentElement;
            const newText = prompt('Edit task:', li.textContent);
            if (newText !== null) {
                li.textContent = newText;
                li.innerHTML += ' <button onclick="editTask(this)">Edit</button>';
                li.innerHTML += ' <button onclick="deleteTask(this)">Delete</button>';
            }
        }

        function deleteTask(button) {
            const li = button.parentElement;
            li.remove();
        }