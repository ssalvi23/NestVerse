document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
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


function openModal() {
    const modal = document.getElementById('appointmentModal');
    const modalContent = document.getElementById('modalContent');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modalContent.classList.add('opacity-100');
    }, 50);
}

function closeModal() {
    const modal = document.getElementById('appointmentModal');
    const modalContent = document.getElementById('modalContent');
    const successModal = document.getElementById('successModal');
    
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    modalContent.classList.remove('hidden');
    successModal.classList.add('hidden');
}

function showSuccess() {
    const modalContent = document.getElementById('modalContent');
    const successModal = document.getElementById('successModal');
    
    modalContent.classList.add('hidden');
    successModal.classList.remove('hidden');
    
    // Auto close after 3 seconds
    setTimeout(closeModal, 3000);
}

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showSuccess();
});

// Close if clicked outside
document.getElementById('appointmentModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// popup
function showConfirmation(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('appointmentModal').classList.add('hidden'); // Hide the appointment modal
    document.getElementById('confirmationPopup').classList.remove('hidden'); // Show the confirmation popup
}

function closeModal() {
    document.getElementById('appointmentModal').classList.add('hidden');
}

function closeConfirmationPopup() {
    document.getElementById('confirmationPopup').classList.add('hidden');
}


// Hamburger and close button logic
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');

// Toggle the mobile menu when the hamburger button is clicked
hamburger.addEventListener('click', () => {
    // Toggle visibility of the mobile menu
    mobileMenu.classList.toggle('hidden');  // Toggle mobile menu visibility
    mobileMenu.classList.toggle('translate-y-0');  // Toggle slide-in animation

    // Toggle the hamburger icon to an "X" and vice versa
    hamburgerIcon.classList.toggle('open');  // Apply or remove the "X" effect
});

// Optional: Close the menu if clicked outside
document.addEventListener('click', (e) => {
    // Check if the click was outside the mobile menu or hamburger button
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('translate-y-0');
        hamburgerIcon.classList.remove('open');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-btn');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the content panel for this button
            const content = button.nextElementSibling;
            const arrow = button.querySelector('svg');
            
            // Close all other FAQs
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherContent = otherButton.nextElementSibling;
                    const otherArrow = otherButton.querySelector('svg');
                    otherContent.classList.add('hidden');
                    otherArrow.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ
            content.classList.toggle('hidden');
            if (!content.classList.contains('hidden')) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });
});


function setDefaultDateTime() {
    const dateInput = document.getElementById('appointmentDate');
    const timeInput = document.getElementById('appointmentTime');

    // Get today's date
    const today = new Date();
    let nextWorkingDay = new Date(today);

    // Find the next working day (Monday to Friday)
    if (nextWorkingDay.getDay() === 5) {
        // If it's Friday, set to Monday
        nextWorkingDay.setDate(nextWorkingDay.getDate() + 3);
    } else if (nextWorkingDay.getDay() === 6) {
        // If it's Saturday, set to Monday
        nextWorkingDay.setDate(nextWorkingDay.getDate() + 2);
    } else {
        // Otherwise, set to next day
        nextWorkingDay.setDate(nextWorkingDay.getDate() + 1);
    }

    // Format the date to yyyy-mm-dd
    const formattedDate = nextWorkingDay.toISOString().split('T')[0];

    // Set the date and time to default (next working day and 11:00 AM)
    dateInput.value = formattedDate;
    timeInput.value = '11:00';
}

// Set default date and time when modal is shown
document.addEventListener('DOMContentLoaded', setDefaultDateTime);
