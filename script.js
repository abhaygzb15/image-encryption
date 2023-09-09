document.getElementById("uploadButton").addEventListener("click", function () {
    document.getElementById("imageUpload").click();
  });
  
  // You can add more JavaScript functionality here if needed
  // Add this code to your existing script.js file
  
  // Function to handle image selection and display
  function handleImageUpload(event) {
    const selectedImage = document.getElementById("selectedImage");
    const fileInput = event.target;
  
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
  
      // Check if the selected file is an image
      if (selectedFile.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(selectedFile);
        selectedImage.src = imageUrl;
  
        // Make the selected image visible
        selectedImage.style.display = "block";
  
        // You can adjust the CSS properties of the selected image container here
        const selectedImageContainer = document.querySelector(
          ".selected-image-container"
        );
        selectedImageContainer.style.display = "block";
      } else {
        alert("Please select a valid image file.");
      }
    }
  }
  
  // Attach the handleImageUpload function to the file input change event
  document
    .getElementById("imageUpload")
    .addEventListener("change", handleImageUpload);
  document.getElementById("encryptButton").addEventListener("click", function () {
    const outputDiv = document.querySelector(".output");
    const encryptedImage = document.getElementById("encryptedImage");
    encryptedImage.src = "./images/image-encryption.jpeg";
    encryptedImage.alt = "Encrypted Image";
  
    // Make the encrypted image visible
    encryptedImage.style.display = "block";
  
    // Update the text in the output div
    outputDiv.textContent = "Encryption Complete";
  });
  
  // Attach the handleImageUpload function to the file input change event
  document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
  const buttons = document.querySelectorAll('.info');
  
  // Loop through each button and add a click event listener
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          // Get the value of the "data-link" attribute
          const link = button.getAttribute('data-link');
          
          // Check if a link is provided
          if (link) {
              // Open the link in a new tab or window
              window.open(link, '_blank');
          }
      });
  });
=======
  document.getElementById("imageUpload").click();
});

// You can add more JavaScript functionality here if needed
// Add this code to your existing script.js file

// Function to handle image selection and display
function handleImageUpload(event) {
  const selectedImage = document.getElementById("selectedImage");
  const fileInput = event.target;

  if (fileInput.files.length > 0) {
    const selectedFile = fileInput.files[0];

    // Check if the selected file is an image
    if (selectedFile.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(selectedFile);
      selectedImage.src = imageUrl;

      // Make the selected image visible
      selectedImage.style.display = "block";

      // You can adjust the CSS properties of the selected image container here
      const selectedImageContainer = document.querySelector(
        ".selected-image-container"
      );
      selectedImageContainer.style.display = "block";
    } else {
      alert("Please select a valid image file.");
    }
  }
}

// Attach the handleImageUpload function to the file input change event
document
  .getElementById("imageUpload")
  .addEventListener("change", handleImageUpload);
document.getElementById("encryptButton").addEventListener("click", function () {
  const outputDiv = document.querySelector(".output");
  const encryptedImage = document.getElementById("encryptedImage");
  encryptedImage.src = "./images/image-encryption.jpeg";
  encryptedImage.alt = "Encrypted Image";

  // Make the encrypted image visible
  encryptedImage.style.display = "block";

  // Update the text in the output div
  outputDiv.textContent = "Encryption Complete";
});
