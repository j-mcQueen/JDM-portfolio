// Global variables

const navBurger = document.querySelector('#nav-burger');

// Global functions 

// Slides in navbar links when the nav burger is clicked

const navSlider = function() {
    const navList = document.querySelector('#nav-list');

    navBurger.addEventListener('click', function() {
        navList.classList.toggle('nav-list-active');
        navList.style.transition = 'transform 0.5s ease-in-out';

        if (navList.getAttribute('class') === 'nav-list-active') {
            navList.style.transform = 'translateX(0%)';
        } else {
            navList.style.transform = 'translateX(100%)';
        }
    });
}

navSlider();

// Desktop-only functions

const desktopOnly = function() {
    if (window.matchMedia('(min-width: 1440px').matches) {

        // Prevent redirection on click of icons

        const prevDef = function() {
            const dontOpen = document.querySelectorAll('.desktop-prev-def').forEach(dontOpen => {
                dontOpen.addEventListener('click', function(e) {
                    e.preventDefault();
                });
            }); 
        }

        prevDef();

        // On mouseover of #about-icon, the 'about' subtitle displays. Removed on mouseout 

        const aboutTooltip = function() {
            const aboutSub = document.querySelector('#about-box');
            const aboutTarget = document.querySelector('#about-icon');

            aboutTarget.addEventListener('mouseover', function() {
                aboutSub.style.display = 'block';
                aboutSub.style.position = 'fixed';

                window.onmousemove = function(e) {
                    let x = e.clientX;
                    let y = e.clientY;
                    aboutSub.style.top = (y + 2) + 'px';
                    aboutSub.style.left = (x + 2) + 'px';
                }
            });

            aboutTarget.addEventListener('mouseout', function() {
                aboutSub.style.display = 'none';
                aboutSub.style.position = '';
            });
        }

        aboutTooltip();

        // On mouseover of #portfolio-icon, the 'portfolio' subtitle displays. Removed on mouseout

        const portfolioTooltip = function() {
            const portfolioSub = document.querySelector('#portfolio-box');
            const portfolioTarget = document.querySelector('#portfolio-icon');

            portfolioTarget.addEventListener('mouseover', function() {
                portfolioSub.style.display = 'block';
                portfolioSub.style.position = 'fixed';

                window.onmousemove = function(e) {
                    let x = e.clientX;
                    let y = e.clientY;
                    portfolioSub.style.top = (y + 2) + 'px';
                    portfolioSub.style.left = (x + 2) + 'px';
                }
            });

            portfolioTarget.addEventListener('mouseout', function() {
                portfolioSub.style.display = 'none';
                portfolioSub.style.position = '';
            });
        }

        portfolioTooltip();

        // On mouseover of #contact-icon, the 'contact' subtitle displays. Removed on mouseout

        const contactTooltip = function() {
            const contactSub = document.querySelector('#contact-box');
            const contactTarget = document.querySelector('#contact-icon');

            contactTarget.addEventListener('mouseover', function() {
                contactSub.style.display = 'block';
                contactSub.style.position = 'fixed';

                window.onmousemove = function(e) {
                    let x = e.clientX;
                    let y = e.clientY;
                    contactSub.style.top = (y + 2) + 'px';
                    contactSub.style.left = (x + 2) + 'px';
                }
            });

            contactTarget.addEventListener('mouseout', function() {
                contactSub.style.display = 'none';
                contactSub.style.position = '';
            });
        }

        contactTooltip();

        const showAbout = function() {
            const aboutDiv = document.querySelector('#about-preview');
            const aboutIcon = document.querySelector('#about-icon');
        
            aboutIcon.addEventListener('click', function() {
                aboutDiv.classList.toggle('about-preview-active');
        
                if (aboutDiv.getAttribute('class') === 'about-preview-active') {
                    aboutDiv.style.visibility = 'visible';
                    aboutDiv.style.opacity = 1;
                } else {
                    aboutDiv.style.visibility = 'hidden';
                    aboutDiv.style.opacity = 0;
                }
            });
        }
        
        showAbout();
        
        const showPortfolio = function() {
            const portfolioDiv = document.querySelector('#portfolio-preview');
            const portfolioIcon = document.querySelector('#portfolio-icon');
        
            portfolioIcon.addEventListener('click', function() {
                portfolioDiv.classList.toggle('portfolio-preview-active');
        
                if (portfolioDiv.getAttribute('class') === 'portfolio-preview-active') {
                    portfolioDiv.style.visibility = 'visible';
                    portfolioDiv.style.opacity = 1;
                } else {
                    portfolioDiv.style.visibility = 'hidden';
                    portfolioDiv.style.opacity = 0;
                }
            });
        }
        
        showPortfolio();
        
        const showContact = function() {
            const contactDiv = document.querySelector('#contact-preview');
            const contactPortfolio = document.querySelector('#contact-icon');
        
            contactPortfolio.addEventListener('click', function() {
                contactDiv.classList.toggle('contact-preview-active');
        
                if (contactDiv.getAttribute('class') === 'contact-preview-active') {
                    contactDiv.style.visibility = 'visible';
                    contactDiv.style.opacity = 1;
                } else {
                    contactDiv.style.visibility = 'hidden';
                    contactDiv.style.opacity = 0;
                }
            });
        }
        
        showContact();
    }
}

desktopOnly();