const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')


const clearInputs = (input) => {
        input.value = ''
}

const clearErrors = (input) => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}

const showError = (input, msg) => {
    const formBox = input.parentElement
    formBox.classList.add('error')
    const errorMsg = input.nextElementSibling
    errorMsg.textContent = msg
}

const checkForm = (input) => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearErrors(el)
        }
    })
}

const checkLength = (input, msg) => {
    if(input.value.length < msg) {
        showError(input, `${input.previousElementSibling.textContent.slice(0, -1)} składa się z min ${msg} znaków`)
    }
}
// tu jeszcze mozna dolozyc RegExpa - podzialac na wyrazeniach regularnych - 
const checkPasses = (pass1, pass2) => {
    if(pass2.value !== pass1.value) {
        showError(pass2, `Hasło musi być takie samo w obu polach`)
    }
}

// sprobowac z match()
const checkEmail = (email) => {
    const regexp = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    if (regexp.test(email.value)) {
        clearErrors(email)
    } else {
        showError(email, `Błędny adres email`)
    }
}

//sprobowac tu jeszcze raz z matches!!
const checkErrors = () => {
    let errorsCounter = 0;
    const formBoxErrors = document.querySelectorAll('.form-box')
    formBoxErrors.forEach(el => {
        if (el.classList.contains('error')) {
            errorsCounter++
        }
    })
    if (errorsCounter === 0) {
        popup.classList.add('show-popup')
    }
}

sendBtn.addEventListener('click', (event)  => {
    event.preventDefault();
    checkForm([username, pass, pass2, email])
    checkLength(username, 3)
    checkLength(pass, 8)
    checkPasses(pass, pass2)
    checkEmail(email)
    checkErrors()
})


clearBtn.addEventListener('click', (event) => {
    event.preventDefault();
    [username, pass, pass2, email].forEach(input => {
        clearInputs(input);
        clearErrors(input);
    })
})
