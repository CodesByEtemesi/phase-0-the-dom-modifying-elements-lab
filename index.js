// Write your code here!
let newHeader;

document.addEventListener('DOMContentLoaded', function() {
  // Remove the 'main' DOM node
  const mainElement = document.querySelector('main');
  mainElement.remove();

  // Create a new 'h1' element with id 'victory'
  newHeader = document.createElement('h1');
  newHeader.id = 'victory';

  // Set the innerHTML of the new 'h1' element
  newHeader.innerHTML = "YOUR-NAME is the champion";

  // Append the new 'h1' element to the body
  document.body.appendChild(newHeader);
});

  