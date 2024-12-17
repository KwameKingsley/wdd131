document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img.lazy-load");

    
    const loadImage = (img) => {
        const src = img.getAttribute("data-src");
        if (!src) return; 
        img.src = src; 
        img.onload = () => img.removeAttribute("data-src"); 
    };

   
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadImage(entry.target); 
                observer.unobserve(entry.target);
            }
        });
    });

    
    lazyImages.forEach((img) => observer.observe(img));
});

window.onload = function() {
    const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = 'Last modified: ' + document.lastModified;
};

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        window.location.href = "thankyou.html";
    });
});