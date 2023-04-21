
import createTabs from './tabs';

function load() {
    createTabs();
    createMenuPage();
}

const createMenuPage = () => {
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');

    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Dosa';

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Idli';

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'puri';
    

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    
    content.appendChild(pageContent);
};
export default load;