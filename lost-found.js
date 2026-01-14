const itemsContainer = document.getElementById("itemsContainer");
// const searchInput = document.getElementById("searchInput");

let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];

function renderItems() {
  itemsContainer.innerHTML = "";


  if (lostItems.length === 0) {
    itemsContainer.innerHTML = "<p>No reported items.</p>";
    console.log('EMPTY')
    return;
  }

  lostItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("admin-card");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="category">${item.category}</p>
      <p><strong>Date Lost:</strong> ${item.date}</p>
      <p>${item.description}</p>
    `;

    itemsContainer.appendChild(card);
  });
}

//NOTE FROM YEAR 3 LEVI DUARTE.

//ADD EVENTLISTNERS ARE ONLY FOR SET VARIABLES, NO VARIABLES WERE PRESENT AND CAUSED THE LOGIC TO NOT DISPLAY. THE 
//FUNCTION NOW WORKS, HOWEVER STATUS BAR NEEDS TO STUDIED, TRY LOOKING ON STACK-OVERFLOW (REDDIT FOR CODERS)
renderItems();

