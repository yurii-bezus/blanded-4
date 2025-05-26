import { formElement, buttonEl, taskList } from './refs';
import { renderTask } from './tasks';

formElement.addEventListener('submit', e => {
  e.preventDefault();
  const taskName = e.target.taskName.value.trim();
  const taskDescription = e.target.taskDescription.value.trim();
  console.log(taskName);
  console.log(taskDescription);
  if (!taskName || !taskDescription) {
    return alert('Заповніть всі поля');
  }
  renderTask({ title: taskName, description: taskDescription });
  formElement.reset();
});

taskList.addEventListener('click', event => {
  if (event.target.classList.contains('task-list-item-btn')) {
    const taskItem = event.target.closest('.task-list-item');
    taskItem.remove();
  }
});
