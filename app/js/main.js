const constants = {
    nav: {
        'Home': 'home',
        'About': 'about',
        'Feed': 'feed',
        'Log In': 'EATLogon',
        'Sign Up': 'signup',

    },
    navElementClasses: [
        'nav-item',
    ]
}

// Function to Check Local Storage for Authentification
function checkAuth() {
    // No authentification
    if (localstorage.auth == 'undefined') {
        document.getElementById(logOutButton).style.display = "none";
        document.getElementById(logInButton).style.display = "block";
        document.getElementById(addItemButton).style.display = "none";
        document.getElementById(createAccountButton).style.display = "block";
        // No not display log out or add items buttons
        // log out button has id of logOutButton
        // log in button has id of logInButton
        // add items has id of addItemButton
        // create account button has id of createAccountButton
    } else {
        document.getElementById(logOutButton).style.display = "block";
        document.getElementById(logInButton).style.display = "none";
        document.getElementById(addItemButton).style.display = "block";
        document.getElementById(createAccountButton).style.display = "none";
        // Display log out and add items buttons, hide log in button
    }
}

// Function to store login information
function storeLogin(ownerId)
{
    localstorage.auth = ownerId;
}

function generateFlexbox(){
    let outerBox = document.createElement('div')
        outerBox.classList.add('flex')
        outerBox.classList.add('flex-row')
    
    return outerBox;
}

function generateDiv(content, classListArray){
    let element = document.createElement('div')
    classListArray.forEach((c) => element.classList.add(c))
    element.innerHTML = content
    return element
}

function generateLink(content, href, classListArray){
    let element = document.createElement('a')
    classListArray.forEach((c) => element.classList.add(c))
    element.innerHTML = content
    element.href = href
    return element
}

// Generates Navigation Bar
function generateNavigationBar(){
    let navBar = document.getElementById('nav')
        navBar.classList.add('navbar')
        navBar.classList.add('header-font')

    if(constants.nav){
        let nav = generateFlexbox()
            nav.classList.add('flex-right')
        for(let key in constants.nav){
            nav.appendChild(generateLink(key, `${constants.nav[key]}.html`, constants.navElementClasses))
        }

        navBar.appendChild(nav)
    }
}

function attachEventHandlers(){
    function _attachRedirectEvents(){
        let allButtons = document.querySelectorAll('.redirectButton')

        Array.from(allButtons).forEach((button) => {
            button.addEventListener('click', () => {
                window.location.replace(`./${button.id}.html`)
            })
        })
    }

    _attachRedirectEvents()
}

function init(){
    generateNavigationBar()
    attachEventHandlers()
}
