
window.onload = function() {
    const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = 'Last modified: ' + document.lastModified;
};
