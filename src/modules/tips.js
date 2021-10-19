function header() {
    const headerDiv = document.createElement('div');
    const header = document.createElement('h2');

    header.textContent = 'First Time HomeBuyer Tips & Resources';

    headerDiv.appendChild(header);

    return headerDiv

}

function createTip(title, text) {
    const tipContainer = document.createElement('div');
    const tip = document.createElement('h2');
    const span = document.createElement('h3');

    tipContainer.classList.add('tip');

    tip.textContent = title;
    span.textContent = text;

    tipContainer.appendChild(tip);
    tipContainer.appendChild(span);

 
    return tipContainer;
}


export default function tipsContent() {
    const page = document.getElementById('contentContainer');
    const tipsContentContainer = document.createElement('div');
    const head = header();
    const tipsContent = document.createElement('div');

    const downPayment = createTip('How much should I have for a down payment?', '$10000 would be a good starting point');

    tipsContent.appendChild(downPayment);

    tipsContentContainer.appendChild(head);
    tipsContentContainer.appendChild(tipsContent);

    page.appendChild(tipsContentContainer);
    

}