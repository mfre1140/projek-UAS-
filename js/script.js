// script.js
function toggleDetails(paketId) {
  var paketElements = document.getElementsByClassName('detail-paket');
  var currentElement = document.getElementById(paketId);
  
  if (currentElement.classList.contains('show')) {
      // If the clicked element is already shown, hide it
      currentElement.classList.remove('show');
      setTimeout(function() {
          currentElement.style.display = "none"; // Hide the element after transition
      }, 500); // Match the duration of the CSS transition
  } else {
      // First, hide all elements
      for (var i = 0; i < paketElements.length; i++) {
          paketElements[i].classList.remove('show');
          paketElements[i].style.display = "none";
      }
      // Then, show the clicked element
      currentElement.style.display = "block"; // Display the element
      setTimeout(function() {
          currentElement.classList.add('show');
      }, 0);
  }
}
