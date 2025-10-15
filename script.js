// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for contact link
    const contactLink = document.querySelector('.contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Handle VIEW MORE button interaction
    const viewMoreBtn = document.querySelector('.view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            // Scroll to the first gallery section
            const firstGallery = document.querySelector('.gallery-section');
            if (firstGallery) {
                firstGallery.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });


    // Add hover effects to placeholder images
    const placeholderImages = document.querySelectorAll('.placeholder-image');
    placeholderImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add a subtle animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // In a real implementation, these would link to actual social media profiles
            console.log('Social link clicked:', this.textContent);
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close any open modals or return to top
        if (e.key === 'Escape') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });


    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('a, button, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #ffffff';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Add CSS for scroll effects
const style = document.createElement('style');
style.textContent = `
    .header.scrolled {
        background-color: rgba(10, 10, 10, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);
