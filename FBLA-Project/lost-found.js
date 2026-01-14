const form = document.getElementById("reportForm");
  const card = document.getElementById("itemCard");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    // Get values

    document.getElementById("cardname").textContent =
    document.getElementById( "itemName").value;

    document.getElementById("card-lost").textContent =
    document.getElementById("datelost").value;

    
    document.getElementById("card-description").textContent =
    document.getElementById("description").value;

    
  });

  function setStatusAndGo() {
            // Set a status item in local storage
            localStorage.setItem('processStatus', 'pending');
            // Navigate to the next page
            window.location.href = 'admin.dashboard.html';
        }
