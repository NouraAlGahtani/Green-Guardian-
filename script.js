// // Plant Detection Page
// document.getElementById('upload-form').addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     const resultSection = document.getElementById('result-section');
//     const resultText = document.getElementById('result-text');
//     const resultImage = document.getElementById('result-image');
//     const plantDetails = document.getElementById('plant-details');
//     const plantImage = document.getElementById('plant-image');
  
//     if (plantImage.files.length === 0) {
//       alert('Please upload an image!');
//       return;
//     }
  
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       resultImage.src = event.target.result;
//       resultText.textContent = "Detected Plant: Corn";
//       document.getElementById('water-percentage').textContent = "Water Percentage: 70%";
//       document.getElementById('care-tips').textContent = "Tip: Water daily and keep in sunlight.";
//       resultSection.style.display = 'block';
//       plantDetails.style.display = 'block';
//     };
//     reader.readAsDataURL(plantImage.files[0]);
//   });
  
//   // Chat Page (Placeholder)
//   document.getElementById('send-chat')?.addEventListener('click', () => {
//     const chatBox = document.getElementById('chat-box');
//     if (chatBox.value.trim()) {
//       alert('Message sent: ' + chatBox.value);
//       chatBox.value = '';
//     } else {
//       alert('Please type a message.');
   
//     })}