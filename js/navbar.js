var openNav = function() {
    var navMenu = document.querySelector('.nav-menu');
    var navButton = document.querySelector('.nav-button');
    if (navMenu.className === 'nav-menu') {
        navMenu.className += ' responsive';
        navButton.src = '/img/exit.svg';
    } else {
        navMenu.className = 'nav-menu';
        navButton.src = '/img/menu.svg';
    }
};

var highlightCurrentLink = function() {
    var navLinks = document.querySelectorAll('.nav-menu li a:not(.logo)');
    var navPath = window.location.origin + '/' +
                  window.location.pathname.split('/')[1];
    if (!navPath.endsWith('/')) {
        navPath += '/';
    }
    for (var i = 0; i < navLinks.length; i++) {
        if (navPath === navLinks[i].href) {
            if (navLinks[i].className == '') {
                navLinks[i].classList.add('currentLink');
            }
            return;
        }
    }
};

window.addEventListener('load', highlightCurrentLink);
