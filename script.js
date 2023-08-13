const projectForm = document.getElementById('projectForm');
const projectNameInput = document.getElementById('projectName');
const dueDateInput = document.getElementById('dueDate');
const projectList = document.getElementById('projectList');

projectForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const projectName = projectNameInput.value;
  const dueDate = dueDateInput.value;

  if (!projectName || !dueDate) {
    alert('Please enter project name and due date.');
    return;
  }

  const projectItem = document.createElement('li');
  const deleteButton = document.createElement('button');

  projectItem.innerHTML = `${projectName} (Due: ${dueDate})`;
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function () {
    projectList.removeChild(projectItem);
  });

  projectItem.appendChild(deleteButton);
  projectList.appendChild(projectItem);

  projectNameInput.value = '';
  dueDateInput.value = '';
});

projectList.addEventListener('click', function (event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'LI') {
    clickedElement.classList.toggle('completed');
  }
});
