
function setupLoginEventHandlers(){
    function _setUpValidation(){
        const pairs = [
            'emailInput',
            'passwordInput'
        ]

        let inputs = document.querySelectorAll('.inputToValidate')

        Array.from(inputs).forEach((input) => {
            input.addEventListener('keyup', (e) => {
                console.log('trigger')
                let className = Array.from(e.target.classList).filter((c) => {
                    return pairs.includes(c)
                })
                
                let elementsToMatch = document.querySelectorAll(`.${className[0]}`)
                let button = document.getElementById('submitButton')
                let valueOne = elementsToMatch[0]
                let valueTwo = elementsToMatch[1]
                console.log(valueOne.value)
                if(!valueOne.value.includes(valueTwo.value)){
                    valueOne.classList.add('invalid')
                    valueTwo.classList.add('invalid')
                    button.classList.add('invalidButton')
                } else {
                    console.log('entering')
                    valueOne.classList.remove('invalid')
                    valueTwo.classList.remove('invalid')
                    button.classList.remove('invalidButton')
                }
            })
        })
    }

    _setUpValidation()
}


function initLogin(){
    setupLoginEventHandlers()
}