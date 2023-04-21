
import createTabs from './tabs';

function load() {
    createTabs();
    createContactPage();
}

const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');



    const form = document.createElement('form');
    form.classList.add('contact-form');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    form.appendChild(heading)

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter Heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = "Enter Address";
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.placeholder = "Enter Phone Number";
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);
};

export default load;