/* =========================================
             LOADER
========================================= */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* =========================================
             HEADER
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================================
             MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");

});


/* Close menu after clicking */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

    });

});



/* =========================================
             SCROLL ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right"
    );


const animationObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    animationObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach((element) => {

    animationObserver.observe(element);

});



/* =========================================
             ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


const activeObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                    });


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        },

        {
            threshold: 0.45
        }

    );


sections.forEach((section) => {

    activeObserver.observe(section);

});



/* =========================================
             CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const email =
            document.getElementById("email").value.trim();


        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill all fields.";

            return;

        }


        formMessage.textContent =
            `Thank you ${name}! Your message has been received.`;


        contactForm.reset();

    }
);



/* =========================================
             SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", (event) => {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});