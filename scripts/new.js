// document.addEventListener('DOMContentLoaded', function () {
//     const modal = document.getElementById('imageModal');
//     const modalImg = document.getElementById('modalImage');
//     const images = document.querySelectorAll('.gallery-img');
//     const closeModalButton = document.querySelector('.close-modal'); // Single close button
//     const prevButton = document.querySelector('.prev-image');
//     const nextButton = document.querySelector('.next-image');
//     let currentImageIndex = 0;

//     // Open modal
//     images.forEach((img, index) => {
//         img.addEventListener('click', function () {
//             modal.classList.remove('hidden');
//             modalImg.src = this.src;
//             currentImageIndex = index;
//             document.body.style.overflow = 'hidden'; // Prevent scrolling
//         });
//     });

//     // Close modal (via close button)
//     closeModalButton.addEventListener('click', function () {
//         closeModal();
//     });

//     // Close modal (via background click)
//     modal.addEventListener('click', function (e) {
//         if (e.target === modal) {
//             closeModal();
//         }
//     });

//     // Navigation
//     prevButton.addEventListener('click', function (e) {
//         e.stopPropagation();
//         currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//         modalImg.src = images[currentImageIndex].src;
//     });

//     nextButton.addEventListener('click', function (e) {
//         e.stopPropagation();
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         modalImg.src = images[currentImageIndex].src;
//     });

//     // Keyboard navigation
//     document.addEventListener('keydown', function (e) {
//         if (!modal.classList.contains('hidden')) {
//             if (e.key === 'Escape') closeModal();
//             if (e.key === 'ArrowLeft') prevButton.click();
//             if (e.key === 'ArrowRight') nextButton.click();
//         }
//     });

//     function closeModal() {
//         modal.classList.add('hidden');
//         document.body.style.overflow = ''; // Restore scrolling
//     }
// });



