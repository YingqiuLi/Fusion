const universities = [
    "Princeton University", "Harvard University", "Massachusetts Institute of Technology (MIT)",
    "Stanford University", "Yale University", "University of Chicago", 
    "Johns Hopkins University", "University of Pennsylvania", "California Institute of Technology (Caltech)", 
    "Columbia University", "Duke University", "Northwestern University", 
    "Dartmouth College", "Brown University", "Cornell University", 
    "University of Notre Dame", "Vanderbilt University", "Rice University", 
    "Washington University in St. Louis", "University of California, Berkeley", 
    "University of California, Los Angeles (UCLA)", "Carnegie Mellon University", 
    "University of Southern California", "University of Michigan, Ann Arbor", 
    "Emory University", "University of Virginia", "Georgetown University", 
    "University of North Carolina, Chapel Hill", "Wake Forest University", 
    "New York University (NYU)", "University of Rochester", "Boston College", 
    "University of California, Santa Barbara", "University of Florida", 
    "University of California, San Diego", "University of California, Irvine", 
    "Georgia Institute of Technology", "University of Miami", "William & Mary", 
    "Boston University", "University of Wisconsin, Madison", 
    "University of Illinois Urbana-Champaign", "Pennsylvania State University", 
    "University of Washington", "University of Texas at Austin", 
    "Tulane University", "Ohio State University", "University of Maryland, College Park", 
    "Purdue University", "University of Connecticut", "Pepperdine University", 
    "University of Georgia", "Syracuse University", "University of Minnesota", 
    "University of Pittsburgh", "Florida State University", "Indiana University", 
    "Michigan State University", "Texas A&M University", "Northeastern University"
];

function populateInstitutions() {
    const list = document.getElementById('institution-list');
    list.innerHTML = '';
    universities.forEach(university => {
        const li = document.createElement('li');
        li.textContent = university;
        li.onclick = () => selectInstitution(university);
        list.appendChild(li);
    });
}

function filterInstitutions() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const list = document.getElementById('institution-list');
    list.innerHTML = '';
    universities
        .filter(uni => uni.toLowerCase().includes(input))
        .forEach(university => {
            const li = document.createElement('li');
            li.textContent = university;
            li.onclick = () => selectInstitution(university);
            list.appendChild(li);
        });
}

function selectInstitution(name) {
    const searchBar = document.getElementById('search-bar');
    searchBar.value = name;
    document.getElementById('institution-list').style.display = 'none';

    const button = document.getElementById('continue-button');
    button.classList.remove('disabled');
    button.disabled = false;
}

function resetInstitutionSelection() {
    document.getElementById('institution-list').style.display = 'block';
    const button = document.getElementById('continue-button');
    button.classList.add('disabled');
    button.disabled = true;
}
