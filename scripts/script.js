AOS.init({
    duration: 1000,
    once: true
});

// Parallax effect
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.card-3d').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = `perspective(1000px) rotateY(${(x - rect.width/2)/20}deg) rotateX(${-(y - rect.height/2)/20}deg)`;
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
const videoContainer = document.querySelector('.video-properties');
const video = document.querySelector('#video');

// Function to play the video when hovered
videoContainer.addEventListener('mouseenter', () => {
    video.play();
});

// Function to pause the video when mouse leaves the video container
videoContainer.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Optionally reset the video to the beginning
});
});



document.addEventListener('mousemove', (e) => {
const { clientX, clientY } = e;
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

const moveX = (clientX - centerX) / 50;
const moveY = (clientY - centerY) / 50;

gsap.to('#headset', {
x: moveX,
y: moveY,
duration: 1,
ease: 'power2.out'
});

// Move particles in opposite direction for depth
document.querySelectorAll('#particles > div').forEach(particle => {
gsap.to(particle, {
  x: -moveX * 2,
  y: -moveY * 2,
  duration: 1,
  ease: 'power2.out'
});
});
});

// Parallax Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
const image = document.querySelector('.parallax-image'); // Target the image directly
const rect = image.getBoundingClientRect();
const x = e.clientX - rect.left; // Mouse X relative to image
const y = e.clientY - rect.top;  // Mouse Y relative to image

// Calculate rotation angles
const rotateX = -(y - rect.height / 2) / 20;
const rotateY = (x - rect.width / 2) / 20;

// Apply the transform directly to the image
image.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

// Reset the effect on mouse leave
document.querySelector('.parallax-image').addEventListener('mouseleave', () => {
const image = document.querySelector('.parallax-image');
image.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
});


