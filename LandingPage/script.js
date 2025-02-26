// Detecta el desplazamiento y aplica el efecto de visibilidad
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionPosition < windowHeight * 0.8) {
            section.classList.add("visible");
        }
    });
});



let currentIndex = 0; 

const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 

function nextImage() {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalSlides; // Si llega al final, vuelve a la primera
    slides[currentIndex].style.display = 'block';
}


slides[currentIndex].style.display = 'block';


