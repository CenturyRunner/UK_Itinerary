// Simple JavaScript for the UK Travel Itinerary website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Highlight updated sections
    const saturdaySection = document.querySelector('.itinerary-day:nth-of-type(7)');
    const sundaySection = document.querySelector('.itinerary-day:nth-of-type(8)');
    
    if (saturdaySection && sundaySection) {
        saturdaySection.classList.add('updated');
        sundaySection.classList.add('updated');
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for the sticky navigation
                behavior: 'smooth'
            });
        });
    });
    
    // Add active class to navigation items when scrolling
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // Add back-to-top button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.classList.add('back-to-top');
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Add CSS for back-to-top button
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--secondary-color);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            z-index: 99;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s;
        }
        
        .back-to-top:hover {
            background-color: var(--primary-color);
        }
        
        nav a.active {
            background-color: var(--primary-color);
        }
    `;
    document.head.appendChild(style);
});
