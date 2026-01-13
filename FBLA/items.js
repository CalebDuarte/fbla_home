// Check if admin is logged in
const isAdminLoggedIn = localStorage.getItem("adminLoggedIn");

// If not logged in, redirect to login page
if (!isAdminLoggedIn) {
  alert("You must be logged in as an admin to view this page.");
  window.location.href = "admin.html";
}

// Get container where items will be displayed
const itemsContainer = document.getElementById("itemsContainer");

// Get lost items from localStorage
const lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];

// If there are no items, show a message
if (lostItems.length === 0) {
  itemsContainer.innerHTML = `
    <p class="no-items">No lost items have been reported yet.</p>
  `;
} else {
  // Loop through each item and create a card
  lostItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("item-card");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="category">${item.category}</p>
      <p><strong>Date Lost:</strong> ${item.date}</p>
      <p>${item.description}</p>
    `;

    itemsContainer.appendChild(card);
  });
}
