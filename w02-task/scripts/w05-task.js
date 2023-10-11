/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
var templeList = []; 


/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((element) => {
      const articleElement = document.createElement('article');
      
      const h3Element = document.createElement('h3');
      h3Element.textContent = element.templeName;
      
      const imgElement = document.createElement('img');
      imgElement.src = element.imageUrl;
      imgElement.alt = element.location;
      
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
      templesElement.appendChild(articleElement);
    });
  };
  
  /* async getTemples Function using fetch()*/
  const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    if (response.ok) {
      const data = await response.json();
      templeList.push(...data);
      displayTemples(templeList);
    }
  };
  
/* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
    }
  };

/* sortBy Function */

const sortBy = (temples) => {
 reset();
 
 const filter = document.getElementById('sortBy').value;

 switch (filter) {
    case 'utah':
      // Filter for temples where the location contains "Utah" as a string
      const utahTemples = temples.filter((temple) => temple.location.includes("Utah"));
      displayTemples(utahTemples);
      break;

    case 'notutah':
      // Filter for temples where the location does not contain "Utah" as a string
      const notUtahTemples = temples.filter((temple) => !temple.location.includes("Utah"));
      displayTemples(notUtahTemples);
      break;

    case 'older':
      // Filter for temples where the dedicated date is before 1950
      const olderTemples = temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
      displayTemples(olderTemples);
      break;

    case 'all':
    default:
      // No filter, just use the original 'temples' array
      displayTemples(temples);
      break;
  }
}
getTemples();


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

