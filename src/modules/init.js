function createHead() {
    const headContainer = document.createElement('div');
    const header = document.createElement('h1');
    const logo = document.createElement('h2');
    
    header.innerText = 'Tanya Gonzalez - AZ Realtor';
    logo.innerText = 'Raised in Arizona with over 7 years of real estate experience';


    headContainer.appendChild(header);
    headContainer.appendChild(logo);

    return headContainer

}


function createBtn(id, text) {
    const btn = document.createElement('button');
    const span = document.createElement('span');

    btn.classList.add('tab');
    btn.setAttribute('id', id);
    span.textContent = text;

    btn.appendChild(span);
 
    return btn;
}

function createMainContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'contentContainer')

    contentContainer.innerHTML = '4'

    return contentContainer
}





export default function puta() {

    const area = createHead()
    const mainContainer = createMainContainer()
    const navContainer = document.createElement('div')
    const homeBtn = createBtn('homeBtn', 'Home Page');
    const contactBtn = createBtn('contactBtn', 'Contact');
    const locationsBtn = createBtn('locationsBtn', 'Featured Locations');
    const tipsBtn = createBtn('tipsBtn', 'First Tine Home Buyer Tips');
    const listingsBtn = createBtn('listingsBtn', 'Current Listings Portal');


    navContainer.classList.add('navContainer');

    navContainer.appendChild(homeBtn);
    navContainer.appendChild(contactBtn);
    navContainer.appendChild(locationsBtn);
    navContainer.appendChild(tipsBtn);
    navContainer.appendChild(listingsBtn);


    document.body.appendChild(area);
    document.body.appendChild(navContainer);
    document.body.appendChild(mainContainer);
    

    
}