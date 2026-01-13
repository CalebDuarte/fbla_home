// Get the form element
const reportForm = document.getElementById("reportForm");

reportForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page refresh

  // Get form values
  const name = document.getElementById("itemName").value;
  const category = document.getElementById("itemType").value;
  const date = document.getElementById("dateLost").value;
  const description = document.getElementById("description").value;

  // Create item object
  const newItem = {
    name,
    category,
    date,
    description
  };

  // Get existing items from localStorage or empty array
  const lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];

  // Add new item to array
  lostItems.push(newItem);

  // Save back to localStorage
  localStorage.setItem("lostItems", JSON.stringify(lostItems));

  alert("Your lost item has been reported successfully!");

  // Reset the form
  reportForm.reset();
});

//Go Back Button
function goBack(){
  const goBackBtn = document.getElementsByClassName("goBackBtn");
  window.location.href = "index.html";
}

