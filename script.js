//* =========================================================
  


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 700);

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("open");
            menuBtn.classList.toggle("active");

        });


        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("open");
                menuBtn.classList.remove("active");

            });

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 250;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-up"
    );


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       CERTIFICATE LIGHTBOX
    ===================================================== */

    const certificateModal =
        document.getElementById("certificateModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalClose =
        document.getElementById("modalClose");

    const certificateButtons =
        document.querySelectorAll(".certificate-view");


    certificateButtons.forEach(button => {

        button.addEventListener("click", () => {

            const image =
                button.getAttribute("data-image");

            const title =
                button.getAttribute("data-title");


            if (modalImage) {
                modalImage.src = image;
                modalImage.alt = title;
            }


            if (modalTitle) {
                modalTitle.textContent = title;
            }


            if (certificateModal) {
                certificateModal.classList.add("active");
                document.body.classList.add("modal-open");
            }

        });

    });


    /* =====================================================
       CLOSE CERTIFICATE
    ===================================================== */

    function closeCertificate() {

        if (!certificateModal) return;

        certificateModal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeCertificate
        );

    }


    /* Close when clicking outside image */

    if (certificateModal) {

        certificateModal.addEventListener("click", event => {

            if (event.target === certificateModal) {

                closeCertificate();

            }

        });

    }


    /* Close with ESC */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeCertificate();

        }

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !message) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please fill in all fields.";

                }

                return;

            }


            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your message has been received.";

            }


            contactForm.reset();

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});