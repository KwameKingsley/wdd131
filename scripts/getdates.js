const currentYear = new Date().getFullYear();
document.querySelector("footer p").textContent = `©️ ${currentYear} Kingsley Kwarteng, Ghana`;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;