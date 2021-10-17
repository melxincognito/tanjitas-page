function contactForm() {


    var formContainer = document.createElement('div');
    formContainer.classList.add('contactFormContainer')


    var createform = document.createElement('form');
    createform.setAttribute('action', "");
    createform.setAttribute('method', 'post')

    formContainer.appendChild(createform);
    

    var heading = document.createElement('h2'); // Heading of Form
    heading.innerHTML = "Contact Me: ";
    createform.appendChild(heading);

    var line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);

    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    var namelabel = document.createElement('label'); // Create Label for Name Field
    namelabel.innerHTML = "Your Name : "; // Set Field Labels
    createform.appendChild(namelabel);

    var inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    createform.appendChild(inputelement);

    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    var emaillabel = document.createElement('label'); // Create Label for E-mail Field
    emaillabel.innerHTML = "Your Email : ";
    createform.appendChild(emaillabel);

    var emailelement = document.createElement('input'); // Create Input Field for E-mail
    emailelement.setAttribute("type", "text");
    emailelement.setAttribute("name", "demail");
    createform.appendChild(emailelement);

    var emailbreak = document.createElement('br');
    createform.appendChild(emailbreak);

    var messagelabel = document.createElement('label'); // Append Textarea
    messagelabel.innerHTML = "Your Message : ";
    createform.appendChild(messagelabel);

    var texareaelement = document.createElement('textarea');
    texareaelement.setAttribute("name", "dmessage");
    createform.appendChild(texareaelement);

    var messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);

    var submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    createform.appendChild(submitelement);

  

    return formContainer;
    }


    export default function contactInfo() {

        const page = document.getElementById('contentContainer')
        const form = contactForm();

        const contactCont = document.createElement('div');
        const contactName = document.createElement('h2');
        const contactEmail = document.createElement('h3');
        const contactPhone = document.createElement('h3');


        contactName.textContent = 'Tanya Gonzalez';
        contactEmail.textContent = 'e-mail: tanya@tanyasellshomes.net'
        contactPhone.textContent = 'work-cell: (623) 800 - 3449'

        
        contactCont.appendChild(contactName);
        contactCont.appendChild(contactEmail);
        contactCont.appendChild(contactPhone);
        contactCont.appendChild(form)
        page.appendChild(contactCont)
       

        return page


}