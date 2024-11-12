const courses = [
    "CS 2500: Fundamentals of Computer Science 1",
    "CS 2510: Fundamentals of Computer Science 2",
    "CS 3200: Database Design",
    "CS 3500: Object-Oriented Design",
    "CS 4800: Algorithms and Data",
    "CS 4400: Machine Learning"
];

let selectedCourses = [];

function populateCourses() {
    const list = document.getElementById('course-list');
    list.innerHTML = '';
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course} `;
        
        // Add "+" button to select a course
        const addButton = document.createElement('button');
        addButton.textContent = "+";
        addButton.onclick = () => addCourse(course);
        li.appendChild(addButton);

        list.appendChild(li);
    });
}

function filterCourses() {
    const input = document.getElementById('course-search-bar').value.toLowerCase();
    const list = document.getElementById('course-list');
    list.innerHTML = '';
    courses
        .filter(course => course.toLowerCase().includes(input))
        .forEach(course => {
            const li = document.createElement('li');
            li.textContent = `${course} `;

            const addButton = document.createElement('button');
            addButton.textContent = "+";
            addButton.onclick = () => addCourse(course);
            li.appendChild(addButton);

            list.appendChild(li);
        });
}

function addCourse(course) {
    if (selectedCourses.includes(course)) {
        alert('Course already selected.');
        return;
    }
    selectedCourses.push(course);
    updateSelectedCourses();
    validateCourseSelection();
}

function updateSelectedCourses() {
    const selectedList = document.getElementById('selected-courses-list');
    selectedList.innerHTML = '';
    selectedCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;

        // Add remove button for each selected course
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeCourse(course);
        li.appendChild(removeButton);

        selectedList.appendChild(li);
    });
}

function removeCourse(course) {
    selectedCourses = selectedCourses.filter(c => c !== course);
    updateSelectedCourses();
    validateCourseSelection();
}

function validateCourseSelection() {
    const continueButton = document.getElementById('course-continue-button');
    if (selectedCourses.length > 0) {
        continueButton.classList.remove('disabled');
        continueButton.disabled = false;
    } else {
        continueButton.classList.add('disabled');
        continueButton.disabled = true;
    }
}

function resetCourseSelection() {
    document.getElementById('course-list').style.display = 'block';
}
