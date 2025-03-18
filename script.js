document.getElementById('add-project-btn').addEventListener('click', function () {
    document.getElementById('project-form').classList.toggle('hidden');
});

document.getElementById('save-project-btn').addEventListener('click', function () {
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;

    if (title && description) {
        // Create a new project card
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `<h3>${title}</h3><p>${description}</p>`;

        // Append the new project to the grid
        document.getElementById('project-list').appendChild(projectCard);

        // Clear form fields and hide form
        document.getElementById('project-title').value = '';
        document.getElementById('project-description').value = '';
        document.getElementById('project-form').classList.add('hidden');
    } else {
        alert('Please enter both title and description.');
    }
});
