const constants = {
    nav: {
        'Home': 'home',
        'About': 'about',
        'Log In': 'EATLogon',
        'Sign Up': 'signup',
    },
    navElementClasses: [
        'nav-item',
    ]
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