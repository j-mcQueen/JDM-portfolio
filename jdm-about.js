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

    // On mouseover of #home-icon, the 'home' subtitle displays. Removed on mouseout

    const homeTooltip = function() {
        const homeSub = document.querySelector('#home-box');
        const homeTarget = document.querySelector('#home-icon');

        homeTarget.addEventListener('mouseover', function() {
            homeSub.style.display = 'block';
            homeSub.style.position = 'fixed';

            window.onmousemove = function(e) {
                let x = e.clientX;
                let y = e.clientY;
                homeSub.style.top = (y + 2) + 'px';
                homeSub.style.left = (x + 2) + 'px';
            }
        });

        homeTarget.addEventListener('mouseout', function() {
            homeSub.style.display = 'none';
            homeSub.style.position = '';
        });
    }

homeTooltip();

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