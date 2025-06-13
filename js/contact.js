document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    // In a real app, you would send this to a server
    // For demo, we'll just show a success message
    setTimeout(() => {
      document.getElementById("contactForm").style.display = "none";
      const responseDiv = document.getElementById("formResponse");
      responseDiv.style.display = "block";
      responseDiv.innerHTML = `
        <h3 style="color:#0072ff;">Thank you for your message!</h3>
        <p>We've received your inquiry and will get back to you soon.</p>
        <p>Here's what you submitted:</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `;
    }, 1000);
  }
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all required fields.");
    return false;
  }

  // Simple email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}
