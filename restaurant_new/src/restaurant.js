
import createTabs from './tabs';

function load() {
    createTabs();
    createRestaurantHomePage();
}


const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    var pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h2');
    heading.textContent = 'Home';
    pageContent.appendChild(heading);

    const image = document.createElement('img');
    image.src = "../img1.jpeg";
    image.height = '500';
   
    pageContent.appendChild(image);


    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our Restaurant";
    pageContent.appendChild(headline);


    const copy = document.createElement('p');
    copy.textContent = 'we serve the best food in town';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);

}
export default load;