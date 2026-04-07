// Simple form submission handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("formResponse").textContent =
    `Thank you, ${name}! Your message has been received.`;
  
  // Reset form
  document.getElementById("contactForm").reset();
});
