// Navigation handling
document.addEventListener("DOMContentLoaded", function () {
  // Handle navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      navigateTo(page);
    });
  });

  // View Products button
  if (document.getElementById("viewProductsBtn")) {
    document
      .getElementById("viewProductsBtn")
      .addEventListener("click", function () {
        navigateTo("products");
      });
  }

  // Admin login modal
  const adminBtn = document.getElementById("adminBtn");
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");
  const loginSubmit = document.getElementById("loginSubmit");
  const errorMsg = document.getElementById("errorMsg");

  if (adminBtn) {
    adminBtn.addEventListener("click", () => {
      loginModal.style.display = "block";
      errorMsg.textContent = "";
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      loginModal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });

  if (loginSubmit) {
    loginSubmit.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      if (username === "rashwanth" && password === "adminrashwanth") {
        navigateTo("admin");
      } else {
        errorMsg.textContent = "Invalid username or password.";
      }
    });
  }

  // Handle Enter key in login form
  const passwordInput = document.getElementById("password");
  const usernameInput = document.getElementById("username");

  if (passwordInput && usernameInput && loginSubmit) {
    passwordInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        loginSubmit.click();
      }
    });

    usernameInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        loginSubmit.click();
      }
    });
  }
});

function navigateTo(page) {
  if (page === "index") {
    window.location.href = "index.html";
  } else {
    window.location.href = `${page}.html`;
  }
}
