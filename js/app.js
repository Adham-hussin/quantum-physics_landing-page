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
const nav = document.querySelector('#navbar__list');
const secs = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// checking the active section
function isActive() {
    activeSec = secs[0];
    min = 11610497110107115; //big number for the first top bound will definetly be less than it
    for (const sec of secs) {
        let bound = sec.getBoundingClientRect();
        if (bound.top > -200 & bound.top < min) {
            min = bound.top;
            activeSec = sec
        };
    };
    return activeSec;
};


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
//adding sections options to navigation bar
function addSecs() {
    for (let sec of secs) {
        let option = document.createElement('li');
        option.className = 'menu__link';
        option.innerText = sec.id;
        option.id = sec.id + "h"
        nav.appendChild(option);
    };
};
//changing the sections classess
function changeClass() {

    window.addEventListener('scroll', function() {
        //adding the styling class to the active section
        let secA = isActive();
        secA.classList.add('your-active-class');
        //removing the styling class from the inactive sections
        for (let sec of secs) {
            if (sec.id != secA.id & sec.classList.contains('your-active-class')) {
                sec.classList.remove('your-active-class')
            }
        }
    });
}
//event listener to move to specified section
function moveToSec() {
    nav.addEventListener('click', function(event) {
        clicked = document.getElementById((event.target.id).replace("h", ""))
        console.log(clicked)
        clicked.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
}

/**
 * End Main Functions
 * Begin Events
 *
 */
changeClass()
addSecs()
moveToSec()

// server code
const postData = async ( url = '',data = {})=>{

    const rs = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(data)
  });

  try {
    const newData = await rs.json();
    console.log(newData);
    return newData;
  }catch(e) {
    console.log("error", e);
    }
}
postData('/physics' ,{physics:'Quantum'})
const get = async (url)=>{
  try {
    fetch(url);
  } catch (e) {
    console.log(e);
  }
}
get('/physics')
