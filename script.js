const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

//walidator maila
//  /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i


//ta funkcja bedzie wyswietlala blad ze jakies pole jest puste
const showError = (input, msg) => {
    const formBox = input.parentElement
    formBox.classList.add('error')
    const errorMsg = input.nextElementSibling //lub formBox.qs('.error-text')
    errorMsg.textContent= msg

    // argument input przechowuje każdego naszego inputa, który miał value='' (chyba)
    // argument msg przechowuje placeholdery
}


//ta funkcja bedzie kasowac bledy
const clearError = (input) => {
    const formBox = input.parentElement
    formBox.classList.remove('error') 
}


// ta funkcja bedzie sprawdzala formularz czy wszystkie pola sa wypelnione
const checkForm = (input) => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}
//argument INPUT z funkcji checkForm przechowuje tablicę z naszymi inputami
// argument EL odnosi sie do kazdej zmiennej, ktora umiescilismy w tablicy


const checkLength = (input, min) => {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.textContent.slice(0, -1)} składa się z min. ${min} znaków.`)
 
    }
    
}

const checkPassword = (pass1, pass2) => {
    if(pass1.value !== pass2.value) {
        showError(pass2, `Hasło musi być takie samo w obu polach`)
    }
}

//ta funkcja bedzie sprawdzala email

const checkEmail = (email) => {
    const regexp = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/;
    if (regexp.test(email.value)) {
        clearError(email)
    } else {
        showError(email, `Niepoprawny email`);
    }
}

//na koniec funkcja ktora sprawdzi czy mozemy wyslac ten formularz - sprawdzi czy ilosc błędów jest równa 0 i wtedy pokaze nam popup'a
const checkErrors = () => {
    const formBox = document.querySelectorAll('.form-box')
    let errorCount = 0;
    formBox.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++
        };
    })

    if(errorCount === 0) {
        popup.classList.add('show-popup')
    }
}

sendBtn.addEventListener('click', (e) => {
    e.preventDefault()
    checkForm([username, pass, pass2, email])
    checkLength(username, 3)
    checkLength(password, 8)
    checkPassword(pass, pass2)
    checkEmail(email)
    checkErrors()

})

//ta funkcja czysci formularz ze wszystkiego co wpisalismy i z błędów
clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    [username, pass, pass2, email].forEach(el => {
        el.value = ''
        clearError(el)
    })
    
})