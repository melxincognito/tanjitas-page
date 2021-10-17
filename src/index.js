import { divide, initial } from 'lodash';
import './style.css';
import puta from './modules/init.js'
import contactInfo from './modules/contact.js'




puta();




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
        console.log('hello')
        alert('a');


    
    })
    contactBtn.addEventListener('click', () => {
        clear()
        contactInfo();

    })
    locationsBtn.addEventListener('click', () => {
        alert('c');
    
    })
    tipsBtn.addEventListener('click', () => {
        alert('d');
      
    })
    listingsBtn.addEventListener('click', () => {
        alert('e');
       
    })
}

listen();