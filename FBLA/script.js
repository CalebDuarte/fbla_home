// demo creds
const ADMIN_USER = "admin";
const ADMIN_PASS = "password123";

// logi function
function adminLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");
  const successMsg = document.getElementById("success-msg");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  // Check credentials
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // Save admin status
    localStorage.setItem("isAdmin", "true");

    // Show success message
    successMsg.textContent = "Login successful! Redirecting...";
    successMsg.style.color = "lime";

    // Delay redirect so message is visible
    setTimeout(() => {
      window.location.href = "admin-dashboard.html";
    }, 1500);
  } else {
    errorMsg.textContent = "Invalid username or password";
  }
}

// RUN ON EVERY PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = localStorage.getItem("isAdmin");

  // Protect admin dashboard
  if (document.body.classList.contains("admin-theme") && !isAdmin) {
    window.location.href = "admin.html";
  }

  // Show admin-only links
  document.querySelectorAll(".admin-only").forEach(link => {
    link.style.display = isAdmin ? "block" : "none";
  });

  // Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isAdmin");
      window.location.href = "index.html";
    });
  }
});


