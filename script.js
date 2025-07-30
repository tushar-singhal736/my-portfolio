// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000); // Reduced to 1 second for faster loading
});

// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

// Login Modal
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('login-form');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
        alert('Login successful! (This is a demo)');
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        loginForm.reset();
    } else {
        alert('Please fill in all fields');
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .stat-item, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Typing Animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Dynamic Text Animation
function typeDynamicText(element, texts, speed = 100) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Deleting text
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = speed;
        
        if (isDeleting) {
            typeSpeed /= 2; // Faster deletion
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of typing
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Initialize typing animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    const dynamicText = document.querySelector('.dynamic-text');
    
    if (typingText) {
        setTimeout(() => {
            typeWriter(typingText, 'Hello, I\'m', 150);
        }, 1000);
    }
    
    if (dynamicText) {
        const roles = [
            'I am a Full Stack Developer',
            'I am a Python Developer',
            'I am a React Developer',
            'I am a Node.js Developer',
            'I am a UI/UX Designer',
            'I am a Web Developer',
            'I am a JavaScript Developer',
            'I am a Frontend Developer',
            'I am a Backend Developer',
            'I am a Mobile App Developer'
        ];
        
        setTimeout(() => {
            typeDynamicText(dynamicText, roles, 100);
        }, 2500);
    }
    
    // Add floating background elements
    addFloatingElements();
});

// Add floating background elements
function addFloatingElements() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Add floating circles
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const circle = document.createElement('div');
            circle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 20 + 10}px;
                height: ${Math.random() * 20 + 10}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                animation: floatUp ${Math.random() * 10 + 10}s linear infinite;
                left: ${Math.random() * 100}%;
                bottom: -20px;
            `;
            
            hero.appendChild(circle);
            
            // Remove circle after animation
            setTimeout(() => {
                circle.remove();
            }, 15000);
        }, i * 1000);
    }
    
    // Add floating squares
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const square = document.createElement('div');
            square.style.cssText = `
                position: absolute;
                width: ${Math.random() * 15 + 8}px;
                height: ${Math.random() * 15 + 8}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.2 + 0.05});
                pointer-events: none;
                z-index: 1;
                animation: floatUp ${Math.random() * 8 + 12}s linear infinite;
                left: ${Math.random() * 100}%;
                bottom: -20px;
                transform: rotate(${Math.random() * 360}deg);
            `;
            
            hero.appendChild(square);
            
            setTimeout(() => {
                square.remove();
            }, 20000);
        }, i * 1500);
    }
}

// Chatbox Functionality
const chatbox = document.getElementById('chatbox');
const chatboxToggle = document.getElementById('chatbox-toggle');
const chatboxBody = document.getElementById('chatbox-body');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendMessageBtn = document.getElementById('send-message');

let isChatboxOpen = false;

// Chatbox toggle
chatboxToggle.addEventListener('click', () => {
    isChatboxOpen = !isChatboxOpen;
    if (isChatboxOpen) {
        chatboxBody.style.display = 'flex';
        chatboxToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        chatboxBody.style.display = 'none';
        chatboxToggle.innerHTML = '<i class="fas fa-comments"></i>';
    }
});

// Send message function
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000);
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = `<p>${text}</p>`;
    
    const messageTime = document.createElement('span');
    messageTime.className = 'message-time';
    messageTime.textContent = 'Just now';
    
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(messageTime);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simple bot responses
function getBotResponse(message) {
    const responses = {
        'hello': 'Hello! How can I help you today?',
        'hi': 'Hi there! Nice to meet you!',
        'how are you': 'I\'m doing great, thanks for asking!',
        'what do you do': 'I\'m a web developer and designer. I create beautiful and functional websites!',
        'portfolio': 'You can check out my projects in the Projects section above!',
        'contact': 'Feel free to reach out through the contact form or social links!',
        'skills': 'I specialize in HTML, CSS, JavaScript, React, Node.js, and many more technologies!',
        'experience': 'I have over 5 years of experience in web development and design.',
        'projects': 'I\'ve completed 50+ projects including e-commerce platforms, task managers, and AI chatbots!',
        'github': 'You can find my code on GitHub! Check the social links in the About section.',
        'linkedin': 'Connect with me on LinkedIn! The link is in the About section.',
        'email': 'You can email me at your.email@example.com or use the contact form!'
    };
    
    const lowerMessage = message.toLowerCase();
    
    for (let key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return 'That\'s interesting! Feel free to ask me about my skills, projects, or experience.';
}

// Send message on button click
sendMessageBtn.addEventListener('click', sendMessage);

// Send message on Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Message sent successfully! (This is a demo)');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    } else {
        alert('Please fill in all fields');
    }
});

// Skill Level Animations
function animateSkillLevels() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            const skillLevel = item.querySelector('.skill-level');
            const level = skillLevel.getAttribute('data-level');
            
            // Add progress bar animation with sound effect simulation
            skillLevel.style.setProperty('--skill-level', '0%');
            
            // Animate the progress bar filling up
            let currentProgress = 0;
            const targetProgress = parseInt(level);
            const increment = targetProgress / 50; // 50 steps for smooth animation
            
            const fillProgress = () => {
                if (currentProgress < targetProgress) {
                    currentProgress += increment;
                    skillLevel.style.setProperty('--skill-level', Math.min(currentProgress, targetProgress) + '%');
                    
                    // Add sparkle effect during filling
                    if (Math.random() > 0.7) {
                        addProgressSparkle(skillLevel);
                    }
                    
                    setTimeout(fillProgress, 40);
                } else {
                    skillLevel.style.setProperty('--skill-level', targetProgress + '%');
                    // Final sparkle burst
                    addProgressSparkle(skillLevel, true);
                }
            };
            
            fillProgress();
            
            // Add bounce effect to skill items
            item.style.animation = 'skillBounce 0.6s ease';
            setTimeout(() => {
                item.style.animation = '';
            }, 600);
        }, index * 400);
    });
}

// Add sparkle effects to progress bars
function addProgressSparkle(progressBar, isFinal = false) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        animation: sparkleFloat 1s ease-out forwards;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
    `;
    
    const rect = progressBar.getBoundingClientRect();
    sparkle.style.left = Math.random() * rect.width + 'px';
    sparkle.style.top = Math.random() * rect.height + 'px';
    
    progressBar.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
    
    if (isFinal) {
        // Add multiple sparkles for final effect
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                addProgressSparkle(progressBar);
            }, i * 100);
        }
    }
}

// Add skill bounce animation and sparkle effects
const skillBounceStyle = document.createElement('style');
skillBounceStyle.textContent = `
    @keyframes skillBounce {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.5);
        }
    }
    
    .skill-level:hover::before {
        animation: skillFill 2s ease forwards, skillShine 1s ease infinite, progressPulse 1s ease infinite;
    }
    
    .skill-level:hover::after {
        animation: progressGlow 1s ease infinite;
    }
`;
document.head.appendChild(skillBounceStyle);

// Trigger skill animations when skills section is visible
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillLevels();
            addSkillParticles();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Add particle effects to skills section
function addSkillParticles() {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                animation: particleFloat 3s ease-out forwards;
            `;
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            skillsSection.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }, i * 100);
    }
}

// Add particle animation style
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
        }
    }
`;
document.head.appendChild(particleStyle);

// Project Card Hover Effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax Effect for Hero Section - Floating card removed

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Mobile Menu Toggle Animation
hamburger.addEventListener('click', () => {
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.transition = '0.3s';
        if (hamburger.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Form Input Focus Effects
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});

// Social Links Hover Effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize all animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements
    const elementsToAnimate = document.querySelectorAll('.skill-item, .project-card, .stat-item, .contact-item, .about-text, .social-links');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Trigger initial reveal
    revealOnScroll();
    
    // Add some random floating animations to elements
    const floatingElements = document.querySelectorAll('.stat-item');
    floatingElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (loginModal.style.display === 'block') {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (isChatboxOpen) {
            chatboxBody.style.display = 'none';
            chatboxToggle.innerHTML = '<i class="fas fa-comments"></i>';
            isChatboxOpen = false;
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    revealOnScroll();
}, 100));

// Add loading states to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        }
    });
});

// Theme toggle functionality removed

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');
    
    // Add some Easter eggs
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            konamiCode = [];
        }
    });
});

// Add CSS for rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .loading {
        opacity: 0.7;
        pointer-events: none;
    }
`;
document.head.appendChild(style);
