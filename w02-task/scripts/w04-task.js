/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Savanna Whittaker",
    photo: "images/profilePictu.png",
    favoriteFoods: ['Sushi', 'Shepherds Pie', 
'Fettuccini Alfredo', 'Brownies'],
    hobbies: ['Reading', 'Quilting', 'Walks', 'Programming'],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [];
myProfile.placesLived.push({
    place: 'Washougal, Washington',
    length: '3 years'},
    {place: 'Round Rock, Texas',
    length: '5 years'},
    {place: 'Lakeworth, Florida',
    length: '1 year' 
});

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
/* Name */

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby; 
    document.querySelector('#hobbies').appendChild(ul);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(places =>{
    let dt = document.createElement('dt'); 
    let dd = document.createElement('dd'); 
    dt.textContent = places.place; 
    dd.textContent = places.length; 
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})


