// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .about-text, .contact-info, .contact-form');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

// Create floating particles in hero section
function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        
        hero.appendChild(particle);
    }
}

// Enhanced scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add special animations for different elements
                if (entry.target.classList.contains('skill-item')) {
                    entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
                } else if (entry.target.classList.contains('project-card')) {
                    entry.target.style.animation = 'slideInUp 0.8s ease forwards';
                } else if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.animation = 'slideInRight 0.7s ease forwards';
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.addEventListener('DOMContentLoaded', () => {
        const animateElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .about-text, .contact-info, .contact-form');
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Create floating particles
        createFloatingParticles();

        // Animate skill bars when they come into view - DISABLED
        const skillBars = document.querySelectorAll('.skill-progress');
        // Skill animations disabled - bars will show static widths
        skillBars.forEach(bar => {
            const originalWidth = bar.style.width;
            bar.style.width = originalWidth; // Set width immediately without animation
        });
    });
}

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(styleSheet);

// Initialize enhanced animations
addScrollAnimations();

// Initialize EmailJS
(function() {
    emailjs.init("EqkMWfZss4OA2r6iC"); // Your EmailJS public key
    console.log("EmailJS initialized successfully");
})();

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Send email using EmailJS
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Send email to your address
            await emailjs.send("service_qb3m2yf", "template_abc123", {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                reply_to: email
            });
            
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('Email sending failed:', error);
            showNotification('Failed to send message. Please try again later.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#48bb78';
            break;
        case 'error':
            notification.style.background = '#f56565';
            break;
        default:
            notification.style.background = '#667eea';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 150; // Adjusted offset
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
        font-weight: 600 !important;
    }
    .nav-link.active::after {
        width: 100% !important;
        background: linear-gradient(135deg, #667eea, #764ba2) !important;
    }
`;
document.head.appendChild(style);

// Particles background effect for hero section (optional)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
    `;
    
    hero.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add floating animation
    const floatAnimation = document.createElement('style');
    floatAnimation.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px) translateX(0px);
            }
            33% {
                transform: translateY(-30px) translateX(20px);
            }
            66% {
                transform: translateY(20px) translateX(-20px);
            }
            100% {
                transform: translateY(0px) translateX(0px);
            }
        }
    `;
    document.head.appendChild(floatAnimation);
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', createParticles);

// Console welcome message
console.log('%c Welcome to my portfolio! 🚀', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%c Feel free to explore my projects and get in touch!', 'font-size: 14px; color: #764ba2;');
