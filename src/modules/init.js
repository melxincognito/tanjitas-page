function createHead() {
    const headContainer = document.createElement('div');
    const header = document.createElement('h1');
    const logo = document.createElement('h2');
    
    headContainer.classList.add('headContainer');
    
    header.innerText = 'Tanya Gonzalez - AZ Realtor';
    logo.innerText = 'Over 7 years of Real Estate experience';


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
    contentContainer.classList.add('contentContainer')

    contentContainer.innerHTML = '4'

    return contentContainer
}





export default function puta() {
    const page = document.createElement('div');

    const area = createHead()
    const mainContainer = createMainContainer()
    const navContainer = document.createElement('div')
    const homeBtn = createBtn('homeBtn', 'Home Page');
    const contactBtn = createBtn('contactBtn', 'Contact');
    const locationsBtn = createBtn('locationsBtn', 'Featured Locations');
    const tipsBtn = createBtn('tipsBtn', 'First Time Home Buyer Tips');
    const listingsBtn = createBtn('listingsBtn', 'Current Listings Portal');


    navContainer.classList.add('navContainer');

    navContainer.appendChild(homeBtn);
    navContainer.appendChild(tipsBtn);
    navContainer.appendChild(locationsBtn);
    navContainer.appendChild(listingsBtn);
    navContainer.appendChild(contactBtn);

    page.appendChild(area);
    page.appendChild(navContainer);
    page.appendChild(mainContainer);
    
    document.body.appendChild(page);


}