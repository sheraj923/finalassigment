// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById('submit-button'); 
let contactPage = document.getElementById('contact-page'); 

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
submitButton.addEventListener('click', change) 

function change(){   
  const thankYouMessage = document.createElement('p'); // Create new <p> element
  thankYouMessage.textContent = 'Thank you for your message'; // Set text content of <p> element
  thankYouMessage.style.fontSize = '24px'; // Set font size of <p> element
  contactPage.innerHTML = ''; // Clear contents of contact page
  contactPage.appendChild(thankYouMessage); // Append <p> element to contact page
}; 
