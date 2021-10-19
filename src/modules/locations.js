import scottsdale from './fotos/scottsdale.png'



function makeLocation(src, city, desc) {

    const description = document.createElement('div');
    const location = document.createElement('div');
    const img = document.createElement('img');
    const locationName = document.createElement('h2');
    const locationDescription = document.createElement('h3');

    location.classList.add('location');
    description.classList.add('description');
    img.setAttribute('src', src);
   
    locationName.textContent = city;
    locationDescription.textContent = desc;
    
  
    description.appendChild(locationName);
    description.appendChild(locationDescription);
    location.appendChild(img);
    location.appendChild(description);

    return location;

  }


  export default function locationsPage() {
    const page = document.getElementById('contentContainer');

    const scotts = makeLocation(scottsdale, 'Scottsdale, Arizona', 'The most expensive shit here');

    page.appendChild(scotts)

  }


