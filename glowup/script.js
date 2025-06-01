// script.js

let isLogin = true;

function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function toggleForm() {
    isLogin = !isLogin;
    document.getElementById('formTitle').innerText = isLogin ? "Iniciar Sesión" : "Registrarse";
    document.querySelector('#loginContent button').innerText = isLogin ? "Entrar" : "Registrar";
}

function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isLogin) {
        const storedUser = JSON.parse(localStorage.getItem(email));
        if (storedUser && storedUser.password === password) {
            document.getElementById('welcome').innerText = `¡Bienvenid@, ${email}!`;
            toggleLogin();
        } else {
            alert("Credenciales incorrectas.");
        }
    } else {
        localStorage.setItem(email, JSON.stringify({ password }));
        alert("¡Registro exitoso!");
        toggleForm();
    }
}


