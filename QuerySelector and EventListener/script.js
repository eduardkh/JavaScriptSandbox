// Select the first element with the class 'suka'
const sukaClass = document.querySelector('.suka');
// Select the element with the ID 'suka'
const sukaID = document.querySelector('#suka');

// Set the text content of the element with class 'suka' to "Suka Class"
sukaClass.textContent = "Suka Class";
// Set the text content of the element with ID 'suka' to "Suka ID"
sukaID.textContent = "Suka ID";

// Add a 'mouseover' event listener to the element with ID 'suka'
// This event triggers when the mouse pointer is over the element
sukaID.addEventListener('mouseover', function () {
    // Inside the event, 'this' refers to sukaID
    // Change the font weight style to 'bold' when the mouse is over the element
    this.style.fontWeight = 'bold';
});

// Add a 'mouseout' event listener to the element with ID 'suka'
// This event triggers when the mouse pointer leaves the element
sukaID.addEventListener('mouseout', function () {
    // Change the font weight style back to 'normal' when the mouse leaves the element
    this.style.fontWeight = 'normal';
});
