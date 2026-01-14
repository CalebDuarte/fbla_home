// Check if admin is logged in
const isAdminLoggedIn = localStorage.getItem("isAdmin");
if (!isAdminLoggedIn) {
  alert("You must be logged in as an admin to view this page.");
  window.location.href = "admin.html"; // redirect to login
}

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("isAdmin");
  alert("Logged out successfully");
  window.location.href = "admin.html";
});

// Container where items will be displayed
const adminCardsContainer = document.getElementById("adminCardsContainer");

// Get lost items from localStorage
let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];

// Render items function
function renderItems() {
  adminCardsContainer.innerHTML = "";

  if (lostItems.length === 0) {
    adminCardsContainer.innerHTML = `<p class="no-items">No lost items reported yet.</p>`;
    return;
  }

  lostItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("admin-card");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="category">${item.category}</p>
      <p><strong>Date Lost:</strong> ${item.date}</p>
      <p>${item.description}</p>
      <button class="mark-returned">Mark as Returned</button>
      <button class="delete-item">Delete</button>
    `;

    // Mark as returned
    card.querySelector(".mark-returned").addEventListener("click", () => {
      lostItems.splice(index, 1);
      localStorage.setItem("lostItems", JSON.stringify(lostItems));
      renderItems();
      alert(`${item.name} marked as returned`);
    });

    // Delete button
    card.querySelector(".delete-item").addEventListener("click", () => {
      if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
        lostItems.splice(index, 1);
        localStorage.setItem("lostItems", JSON.stringify(lostItems));
        renderItems();
      }
    });

    adminCardsContainer.appendChild(card);
  });
}

// Initial render
renderItems();
