function sendEmail(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:abdenour.chenouf23@ump.ac.ma?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    document.getElementById('emailForm').reset();
} 