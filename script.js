function loadSemesters(year) {
    // Hide all widgets
    hideAllWidgets();

    // Show the corresponding semester widgets for the selected year
    document.getElementById(`semester${(year - 1) * 2 + 1}`).style.display = 'block';
    document.getElementById(`semester${(year - 1) * 2 + 2}`).style.display = 'block';
}

function hideAllWidgets() {
    // Hide all year and semester widgets
    for (let i = 1; i <= 3; i++) {
        let yearWidget = document.getElementById(`year${i}`);
        if (yearWidget) {
            yearWidget.style.display = 'none';
        }
    }
    for (let i = 1; i <= 6; i++) {
        let semesterWidget = document.getElementById(`semester${i}`);
        if (semesterWidget) {
            semesterWidget.style.display = 'none';
        }
    }

    // Hide all subject widgets
    for (let i = 1; i <= 3; i++) {
        let subjectWidget = document.getElementById(`subject${i}`);
        if (subjectWidget) {
            subjectWidget.style.display = 'none';
        }
    }
}

function goNotes() {
    // Show the initial state with year widgets
    hideAllWidgets();
    for (let i = 1; i <= 3; i++) {
        let yearWidget = document.getElementById(`year${i}`);
        if (yearWidget) {
            yearWidget.style.display = 'block';
        }
    }
}

function loadEbooks() {
    hideAllWidgets();  // Hide all widgets

    // You can add your logic to load ebooks content here
}

function loadResources() {
    hideAllWidgets();  // Hide all widgets

    // You can add your logic to load resources content here
}

function goAbout(pageURL) {
    // Navigate to the specified page
    window.location.href = pageURL;
}

// Function to open subject widgets when Semester 2 is clicked
function sem_2_Subjects() {
    hideAllWidgets();  // Hide all widgets

    // Show subject widgets for Semester 2
    for (let i = 1; i <= 3; i++) {
        let subjectWidget = document.getElementById(`subject${i}`);
        if (subjectWidget) {
            subjectWidget.style.display = 'block';
        }
    }
}

function toggleDropdown(event) {
    var dropdownContent = document.getElementById("resourcesDropdown");
    dropdownContent.classList.toggle("show");
    
    // Prevent default action of following the link when clicking on the dropdown
    event.preventDefault();
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


