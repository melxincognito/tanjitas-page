import tanya from './fotos/tanya.png';

function makeAboutMe(src, text, about) {

    const aboutMeContainer = document.createElement('div');
    const aboutMeContent = document.createElement('div');
    const img = document.createElement('img');
    const aboutMeTitle = document.createElement('h2');
    const aboutMeDescription = document.createElement('h4');

    aboutMeContainer.classList.add('aboutMeContainer')
    img.setAttribute('src', src);
   
    aboutMeTitle.textContent = text;
    aboutMeDescription.textContent = about;
    
    aboutMeContent.appendChild(aboutMeTitle);
    aboutMeContent.appendChild(aboutMeDescription);

    aboutMeContainer.appendChild(img);
    aboutMeContainer.appendChild(aboutMeContent)

    return aboutMeContainer

  }


export default function homePage() {

    const page = document.getElementById('contentContainer')

    const header = makeAboutMe(tanya, 'Tanya Gonzalez - AZ Realtor', 'I have over 900 years of experience bitching about everything in my life plus much much more.');

    page.appendChild(header);

}