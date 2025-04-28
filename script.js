function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    
    // Show the thank you popup
    showPopup(true);

    // Create a new 'recommendation' element
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Add the new element to the list
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the textarea
    recommendation.value = "";

    // Auto-hide popup after 3 seconds
    setTimeout(() => showPopup(false), 3000);
  }
}

function showPopup(bool) {
  const popup = document.getElementById('popup');
  popup.style.display = bool ? 'flex' : 'none';
}
