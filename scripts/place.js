const temperature = 10; // °C
const windSpeed = 5; // km/h


function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}


function isWindChillViable(temp, speed) {
  return temp <= 10 && speed > 4.8; 
}


document.addEventListener("DOMContentLoaded", () => {
  const windChillElement = document.querySelector("#wind-chill");

  if (isWindChillViable(temperature, windSpeed)) {
    const windChill = calculateWindChill(temperature, windSpeed); 
    windChillElement.textContent = ` ${windChill} °C`; 
  } else {
    windChillElement.textContent = " N/A"; 
  }
});


window.onload = function () {
  const currentYearElement = document.getElementById("currentYear");
  currentYearElement.textContent = new Date().getFullYear();

  const lastModifiedElement = document.getElementById("lastModified");
  lastModifiedElement.textContent = "Last modified: " + document.lastModified;
};


window.onload = function() {
    const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = 'Last modified: ' + document.lastModified;
};

document.addEventListener("DOMContentLoaded", () => {
  const heroLarge = document.getElementById("hero-source-large");
  const heroMedium = document.getElementById("hero-source-medium");
  const heroImg =document.getElementById("hero-img");

  const heroSources = [
    {
      large: "images/image2large.webp",
      medium: "images/image2medium.webp",
      small: "images/image2small.webp",
    },
    {
      large: "images/image2large.webp",
      medium: "images/image2medium.webp",
      small: "images/image2small.webp",
    },
  ];

  let currentIndex = 0;

  function swapHeroImage() {
    currentIndex = (currentIndex + 1) % heroSources.length;

    const newSource = heroSources[currentIndex];
    heroLarge.srcset = newSource.large;
    heroMedium.srcset = newSource.medium;
    heroImg.srcset = newSource.small;
  }

  setInterval(swapHeroImage, 5000);
  
});
