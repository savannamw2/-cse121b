/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Savanna Whittaker';
let currentYear = new Date().getFullYear();
const profilePicture = 'images/profilePictu Small.png.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const pictureElement = document.querySelector('picture');
const imageElement = pictureElement.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);

const altText = `Profile image of Savanna Whittaker`;
imageElement.setAttribute('alt', altText);


/* Step 5 - Array */

let favFoods = ['Sushi', ' Breakfast Sandwiches', ' Pumpkin Cookies'];
foodElement.innerHTML = `${favFoods}`;
favFoods.push(' Grilled Chicken');
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;


