 // Simple animation for skill bars
 document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    });
    
    // Profile image upload simulation
    const uploadBtn = document.getElementById('uploadBtn');
    const profileImage = document.getElementById('profileImage');
    
    uploadBtn.addEventListener('click', function() {
        // In a real application, this would open a file picker
        // For this demo, we'll just cycle through a few placeholder images
        const images = [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
        ];
        
        // Find current image index
        let currentIndex = images.indexOf(profileImage.src);
        if (currentIndex === -1) currentIndex = 0;
        
        // Cycle to next image
        const nextIndex = (currentIndex + 1) % images.length;
        profileImage.src = images[nextIndex];
        
        // Show a temporary message
        const originalText = uploadBtn.innerHTML;
        uploadBtn.innerHTML = '<i class="fas fa-check"></i> Photo Changed';
        setTimeout(() => {
            uploadBtn.innerHTML = originalText;
        }, 2000);
    });
});