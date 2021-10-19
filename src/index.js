import { divide, initial } from 'lodash';
import './style.css';
import puta from './modules/init.js'
import contactInfo from './modules/contact.js'
import tipsContent from './modules/tips.js'
import locationsPage from './modules/locations.js'
import homePage from './modules/home.js'


init();




function listen() {


    const page = document.getElementById('contentContainer');
    const homeBtn = document.getElementById('homeBtn');
    const contactBtn = document.getElementById('contactBtn');
    const locationsBtn = document.getElementById('locationsBtn');
    const tipsBtn = document.getElementById('tipsBtn');
    const listingsBtn = document.getElementById('listingsBtn');

    function clear() {
        page.innerHTML = ''
    }


    homeBtn.addEventListener('click', () => {
        clear();
        homePage();


    
    })
    contactBtn.addEventListener('click', () => {
        clear()
        contactInfo();

    })
    locationsBtn.addEventListener('click', () => {
        clear();
        locationsPage();
    
    })
    tipsBtn.addEventListener('click', () => {
        clear();
        tipsContent();
      
    })
    listingsBtn.addEventListener('click', () => {
        alert('e');
       
    })
}

listen();

function init() {
    puta();
    homePage()
}