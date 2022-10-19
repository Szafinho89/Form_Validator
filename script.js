const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const inputsV = document.querySelectorAll('input')


//ta funkcja bedzie wyswietlala blad ze jakies pole jest puste
const showError = (input, msg) => {
    // argument input przechowuje nasze 4 inputy
    // argument msg przechowuje placeholdery
}


// ta funkcja bedzie sprawdzala formularz czy wszystkie pola sa wypelnione
const checkForm = (input) => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder)
        } else {
            console.log(el);
        }
    })
}
//argument INPUT z funkcji checkForm przechowuje tablicę z naszymi inputami
// argument EL odnosi sie do kazdej zmiennej, ktora umiescilismy w tablicy


sendBtn.addEventListener('click', (e) => {
    e.preventDefault()
    checkForm([username, pass, pass2, email])
})



//ta funkcja bedzie kasowac bledy


//ta funkcja czysci formularz ze wszystkiego co wpisalismy i z błędów
clearBtn.addEventListener('click', (e) => {
    e.preventDefault(); // to jest mega ciekawe
    console.log(e.target);

    [username, pass, pass2, email].forEach(el => {
        el.value = ''
    })
  
})