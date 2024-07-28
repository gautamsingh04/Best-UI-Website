// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var secRightElements = document.querySelectorAll('.secRight');
    var secLeftElements = document.querySelectorAll('.secLeft');

    secRightElements.forEach(function(secRight) {
        if (isInViewport(secRight)) {
            secRight.classList.add('animate');
        } else {
            secRight.classList.remove('animate'); // Remove animation class when out of viewport
        }
    });

    secLeftElements.forEach(function(secLeft) {
        if (isInViewport(secLeft)) {
            secLeft.classList.add('animate');
        } else {
            secLeft.classList.remove('animate'); // Remove animation class when out of viewport
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

// Additional code for animated scrolling
let lastScrollTop = 0;

window.addEventListener("scroll", function(){
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let direction = st > lastScrollTop ? "down" : "up";
    document.querySelectorAll('.animate').forEach(element => {
        if (isInViewport(element)) {
            element.classList.add(direction === "down" ? "fadeInFromRight" : "fadeInFromLeft");
        }
    });
    lastScrollTop = st <= 0 ? 0 : st;
}, false);


// Get all bio sections
const bioSections = document.querySelectorAll('.bio');

// Iterate over each bio section
bioSections.forEach(bio => {
    // Add click event listener to each bio section
    bio.addEventListener('click', event => {
        const current = event.target;
        // Check if the clicked element is the read-more button
        const isReadMoreBtn = current.classList.contains('read-more-btn');
        if (!isReadMoreBtn) return;

        // Get the text content element within the current bio section
        const currentText = bio.querySelector('.read-more-text');

        // Toggle the class to show/hide the text content
        currentText.classList.toggle('read-more-text--show');

        // Toggle the text of the button
        current.textContent = current.textContent.includes('Read More') ? "Read Less.." : "Read More..";
    });
});


const mainMenu = document.querySelector('.navlist');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('.navbar .navlist li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}