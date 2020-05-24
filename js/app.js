/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vida's Code starts here

// Create a full section with the section structure and append it to the body

//creating h2
const headingTwo = document.createElement("h2");

headingTwo.textContent = "Section 4";

// creating first paragraph
const firstPara = document.createElement("p");

firstPara.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendissepotenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nullaeget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duislectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi atincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestiesemper in tellus. Sed congue et odio sed euismod.";

//creating second paragraph
const secondPara = document.createElement("p");

secondPara.textContent =
  "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, velluctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

const myDiv = document.createElement("div");

myDiv.appendChild(headingTwo);
myDiv.appendChild(firstPara);
myDiv.appendChild(secondPara);

myDiv.className = "landing__container";

//create section
const mySection = document.createElement("section");

mySection.id = "section4";

mySection.setAttribute("data-nav", "Section 4");

// add div to section
mySection.appendChild(myDiv);

//add section to main element
const mainElement = document.querySelector("main");

mainElement.appendChild(mySection);

// End creating section

// step 2: the nav
// the nav is made. we have nav and ul element

//we need to add the li elements to the ul
/* <ul>
  <li></li>
</ul> */

const sections = document.querySelectorAll("section");

for (const section of sections) {
  if (section.hasAttribute("data-nav")) {
    const ulElement = document.querySelector("#navbar__list");

    const liElement = document.createElement("li");

    ulElement.appendChild(liElement);

    const aElement = document.createElement("a");

    liElement.appendChild(aElement);

    aElement.classList.add("menu__link");

    const dataNavValue = section.dataset.nav;

    aElement.setAttribute("href", "#" + section.id);

    aElement.textContent = dataNavValue;
  }
}
