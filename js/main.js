// Menu Icon
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
}

// Scroll section active menu link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// Choose the language of the CV pdf file according to the language cookie (lang.js)
// var downloadCV = document.querySelectorAll(".cvDown");
// if (!manuallySetLanguage || manuallySetLanguage === "el") {
//     downloadCV.forEach(function(e) { 
//         e.setAttribute('download', 'CHRISTOS_BANTIS_CV_EL.pdf');
//     })
// } else if (manuallySetLanguage === "en") {
//     downloadCV.href="../uploads/CHRISTOS_BANTIS_CV_EL.pdf";    
//     downloadCV.forEach(function(e) { 
//         e.setAttribute('download', 'CHRISTOS_BANTIS_CV_EN.pdf');
//     })
// }

// Timeline CSS fix for English Language
if (manuallySetLanguage === "en") {
    var marginFlagB = document.getElementById("marginFlagB"); 
    var marginTimeB = document.getElementById("marginTimeB");

    marginFlagB.style.marginLeft = "160px";
    marginTimeB.style.marginLeft = "90px";

    if(window.matchMedia("(max-width: 991px)").matches) {
        // marginFlagB.style.marginLeft = "150px";
        marginTimeB.style.marginLeft = "80px";
    }
    if(window.matchMedia("(max-width: 767px)").matches) {
        marginFlagB.style.marginLeft = "0";
        marginTimeB.style.marginLeft = "0";
    }

    // var contactDiv = document.querySelector(".contact-content");

    // if(window.matchMedia("(max-width: 345px)").matches) {
    //     contactDiv.style.paddingLeft = "0";
    //     contactDiv.style.paddingRight = "0";
    // }
}

// Show the first 6 projects
$(document).ready(function(){
    $(".pr-item").slice(0,6).fadeIn();
    $(".show-more-btn").click(function(){
        if($(".show-more-btn").text() == "Προβολή περισσότερων έργων"){                    
                $(".pr-item").slice(6, 12).fadeIn();
                $(this).text("Προβολή λιγότερων έργων");                        
        } else if($(".show-more-btn").text() == "Προβολή λιγότερων έργων"){
                $(".pr-item").slice(6, 12).fadeOut();
                $(this).text("Προβολή περισσότερων έργων");   
            }
    })                   
});

// Load More Projects Button
const projectsContent = document.querySelector(".projects-content");
const showMoreBtn = document.querySelector(".show-more-btn");

// Project Item Details Popupn
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn") || e.target.classList.contains("pr-item-title")) {
        toggleProjectPopup();
        document.querySelector(".project-popup").scrollTo(0,0);
        projectItemDetails((e.target.parentElement).parentElement);
    }
})

function toggleProjectPopup() {
    document.querySelector(".project-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector("main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", toggleProjectPopup);

function projectItemDetails(projectItem) {
    document.querySelector(".pp-thumbnail img").src = projectItem.querySelector(".pr-item img").src;
    document.querySelector(".pp-header h3").innerHTML = projectItem.querySelector(".pr-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = projectItem.querySelector(".pr-item-details").innerHTML;
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")) {
        toggleProjectPopup();
    }
})

// Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .projects h2', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-content, .projects-content, .services-list, .timeline-content', { origin: 'bottom'});
ScrollReveal().reveal('.about-img, .skills-content', { origin: 'left'});
ScrollReveal().reveal('.about-content', { origin: 'right'});

// Typed JS
if (!manuallySetLanguage || manuallySetLanguage === "el") {
    const typed = new Typed('.multi-text', {
        strings: ['αναλυτής ψηφιακής εγκληματολογίας',
            'πιστοποιημένος Web Developer',
            'Blockchain Enthusiast'],
        typespeed: 150,
        backspeed: 120,
        backDelay: 1300,
        loop: true
    });
} else if (manuallySetLanguage === "en") {
    const typed = new Typed('.multi-text', {
        strings: ['a Digital Forensics Investigator',
            'a Certified Web Developer',
            'a Blockchain Enthusiast'],
        typespeed: 150,
        backspeed: 120,
        backDelay: 1300,
        loop: true
    });
}

// EmailJS
function sendMail(){
    const contactForm = document.getElementById("contact-form");
    const fname = contactForm["name"].value;
    const email = contactForm["email"].value;
    const msg = contactForm["message"].value;

    // Contact Form Validation
    if (!validateContactForm(fname, email, msg)) {
        if (!manuallySetLanguage || manuallySetLanguage === "el") {
            swal({
                title: 'Σφάλμα',
                html: $('<div>')
                    .addClass('some-class')
                    .text('Κάτι πήγε στραβά. Ελέγξτε όλα τα πεδία.'),
                type: 'error',
                animation: false,
                customClass: 'animate__animated animate__shakeX'
            }) 
        } else if (manuallySetLanguage === "en") {
            swal({
                title: 'Error',
                html: $('<div>')
                    .addClass('some-class')
                    .text('Something went wrong. Check all the fields.'),
                type: 'error',
                animation: false,
                customClass: 'animate__animated animate__shakeX'
            }) 
        }
    } else {
        let parms = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            message : document.getElementById("message").value,
        }
        if (!manuallySetLanguage || manuallySetLanguage === "el") {
            let text = 'Σας ευχαριστώ για το <b style="color:#3bb4c1;">μήνυμά</b> σας!';
            emailjs.send("service_o1rfn7t", "template_ee4yby7", parms).then(function(e) {
                swal({
                    title: 'Επιτυχία!',
                    html: text,
                    type: 'success',
                    showConfirmButton: false,
                    timer: 3000
                })
            })    
        } else if (manuallySetLanguage === "en") {
            let text = 'Thank you for <b style="color:#3bb4c1;">contacting</b> me!';
            emailjs.send("service_o1rfn7t", "template_ee4yby7", parms).then(function(e) {
                swal({
                    title: 'Success!',
                    html: text,
                    type: 'success',
                    showConfirmButton: false,
                    timer: 3000
                })
            })   
        }
    }
}

// Function to validate email addresses
function isValidEmail(email) {
    // Define the JS Regex pattern for a valid email address
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    // Test the email against the pattern and return the result (true or false)
    return emailRegex.test(email);
}

// Function to validate name 
function isValidName(name) {
    // Define the JS Regex pattern for a valid name
   const nameRegex = /^([A-Za-z\u0370-\u03FF\u1F00-\u1FFF]*((\s)))+([A-Za-z\u0370-\u03FF\u1F00-\u1FFF])*$/;
    // Test the name against the pattern and return the result (true or false)
    return nameRegex.test(name);
}

// Function to validate the contact form
function validateContactForm(name, email, message) {  
    // Check if the required fields (name, email, and message) are empty
    // If any of them are empty, return false to prevent form submission
    if (!name || !email || !message) {
      return false;
    }  
    // Check if the email is valid using the isValidEmail function
    // If the email is invalid, return false to prevent form submission
    if (!isValidEmail(email)) {
      return false;
    }
    // Check if the name is valid using the isValidName function
    // If the email is invalid, return false to prevent form submission
    if (!isValidName(name)) {
        return false;
      }  
    // If all the validations pass, return true to allow form submission
    return true;
  }