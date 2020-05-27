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

// step 2: Build the nav
// the nav is made. we have nav and ul element

//we need to add the li elements to the ul
/* <ul>
  <li></li>
</ul> */

const sections = document.querySelectorAll("section");

//looping through section elements
for (const section of sections) {
  // checking to see if the section element added has a "data-nav" attribute. So that in the future, only the section elements with data-attribute are added to the nav
  if (section.hasAttribute("data-nav")) {
    const ulElement = document.querySelector("#navbar__list");

    // create li
    const liElement = document.createElement("li");

    //add li to ul
    ulElement.appendChild(liElement);

    // create a (link element)
    const aElement = document.createElement("a");

    // add link element to li
    liElement.appendChild(aElement);

    // add class name of "menu--link" (exists in the css file) for hovering over the link element
    aElement.classList.add("menu__link");
    const sectionDataNavValue = section.dataset.nav;

    // add section id as the class for every "a" element in the nav
    aElement.classList.add(section.id);

    // adding data-nav value of section element as the text of link element
    aElement.textContent = sectionDataNavValue;

    // add event listener click to a element
    aElement.addEventListener("click", function () {
      // scroll to element
      section.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }
}

// This code is taken from Udacity Knowledge:
//https://knowledge.udacity.com/questions/85408#96950

// Step 1 : make a function that knows when a section is in viewport, and then adds the class "your-active-class" to that section, and then remove that class when the section is not in viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();

    //find aElement associated with section
    const element = document.querySelector(`.${section.id}`);

    // if the section is in the viewport
    if (box.top <= 150 && box.bottom >= 150) {
      // apply active state on the current section (the circle and animation)
      section.classList.add("your-active-class");

      // apply active astate to the link element in the nav
      element.classList.add("nav-active");
    }

    // if the section is not in the viewport
    else {
      // Remove active state from section (the circle and animation)
      section.classList.remove("your-active-class");
      // Remove active state from the link element in the nav
      element.classList.remove("nav-active");
    }
  }
}

// Step 2: call  the makeActive function whenever user scrolls the page
// Make sections active
document.addEventListener("scroll", function () {
  makeActive();
});
