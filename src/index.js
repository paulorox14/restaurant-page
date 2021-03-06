import './style.css';
import './aboutSection.css';
import './menuSection.css';
import './contacts.css'

import { createAbout, createAboutText, createAboutTextText, createAboutLocation, createAboutTime } from './about';

import { createContacts } from './contacts';
import { createContactsText } from './contacts';
import { createContactsTitle } from './contacts';
import { phoneAndEmail } from './contacts';
import { leaveAMessage } from './contacts';

import { createRecipes, createRecipesText, createRecipesTitle, createActualRecipes, nameAndPrice } from './recipes';

const content = document.querySelector('.content');

function skeleton() {
    
    const header = document.createElement('div');
    header.className = "header";

    const headerText = document.createElement('div');
    headerText.className = "headerText";
    headerText.innerText = "Eggcellence";
    header.appendChild(headerText);

    content.appendChild(header);

    const tabs = document.createElement('div');
    tabs.className = "tabs";
    
    content.appendChild(tabs);

    const about = document.createElement('div');
    about.className = "about";
    about.innerText = "About";

    tabs.appendChild(about);

    const recipes = document.createElement('div');
    recipes.className = 'recipes';
    recipes.innerText = "Menu";

    tabs.appendChild(recipes);

    const contact = document.createElement('div');
    contact.className = 'contact';
    contact.innerText = "Contact Us";

    tabs.appendChild(contact);
};

skeleton();

function showContent() {
    const about = document.querySelector('.about');
    const aboutContainer = document.querySelector('.aboutContainer');

    const recipes = document.querySelector('.recipes');
    const recipesContainer = document.querySelector('.recipesContainer');

    const contact = document.querySelector('.contact');
    const contactsContainer = document.querySelector('.contactsContainer');

    about.addEventListener('click', () => {
        about.style.borderBottom = "3px solid black";
        recipes.style.borderBottom = "3px solid var(--header-colour)";
        contact.style.borderBottom = "3px solid var(--header-colour)";
        aboutContainer.style.display = "inherit";
        recipesContainer.style.display = "none";
        contactsContainer.style.display = "none";
    })

    recipes.addEventListener('click', () => {
        recipes.style.borderBottom = "3px solid black";
        about.style.borderBottom = "3px solid var(--header-colour)";
        contact.style.borderBottom = "3px solid var(--header-colour)";
        recipesContainer.style.display = "flex";
        aboutContainer.style.display = "none";
        contactsContainer.style.display = "none";
    })

    contact.addEventListener('click', () => {
        contact.style.borderBottom = "3px solid black";
        about.style.borderBottom = "3px solid var(--header-colour)";
        recipes.style.borderBottom = "3px solid var(--header-colour)";
        contactsContainer.style.display = "inherit";
        aboutContainer.style.display = "none";
        recipesContainer.style.display = "none";
    })
}

createAbout();
createAboutText();
createAboutTextText();
createAboutLocation();
createAboutTime();

createRecipes();
createRecipesText();
createRecipesTitle();
createActualRecipes();
nameAndPrice();

createContacts();
createContactsText();
createContactsTitle();
phoneAndEmail();
leaveAMessage();

showContent();
