// On submit
document.querySelector('#create').addEventListener('submit', event => {
    if (!formularioValido())
        event.preventDefault() // Paramos el submit
})

function formularioValido() {
    const nombre = verificarNombre()
    const email = verificarEmail()
    const pwd = verificarPwd()

    return nombre && email && pwd
}

function verificarNombre() {
    return false
}

function verificarEmail() {
    const email = document.querySelector('#email');
    const errorEmail = document.querySelector('#error_email');
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.length === 0)
        errorEmail.innerHTML = 'Rellene este campo'
    else if (email.value.match(validRegex)) {
        email.classList.add('valid')
        return true
    } else 
        errorEmail.innerHTML = 'Email no válido'

    email.classList.add('not-valid')

    return false
}

function verificarPwd() {
    const pwd = document.querySelector('#pwd');
    const pwdRepeat = document.querySelector('#pwdRepeat');

    const errorPwd = document.querySelector('#error_pwd');
    const errorPwdRepeat = document.querySelector('#error_pwdRepeat');

    if (pwd.value.length >= 8 && pwd.value === pwdRepeat.value) {
        pwd.classList.add('valid')
        pwdRepeat.classList.add('valid')
        
        return true
    }

    if (pwd.value.length === 0)
        errorPwd.innerHTML = 'Rellene este campo'
    else if (pwd.value.length >= 8)
        errorPwd.innerHTML = 'Minimo 8 caracteres'
    else if (pwd.value !== pwdRepeat.value)
        errorPwd.innerHTML = 'Tienen que coincidir'

    if (pwdRepeat.value.length === 0)
        errorPwdRepeat.innerHTML = 'Rellene este campo'

    pwd.classList.add('not-valid')
    pwdRepeat.classList.add('not-valid')

    return false
}