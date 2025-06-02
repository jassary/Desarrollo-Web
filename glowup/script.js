let isLogin = true;

function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

function toggleForm() {
    isLogin = !isLogin;
    document.getElementById('formTitle').innerText = isLogin ? "Iniciar Sesión" : "Registrarse";
    document.querySelector('.login-content button').innerText = isLogin ? "Entrar" : "Registrar";

}
function submitForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const welcome = document.getElementById('welcome');

    if (!email || !password) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (isLogin) {
        const storedUser = JSON.parse(localStorage.getItem(email));
        if (storedUser && storedUser.password === password) {
            const nombre = email.split("@")[0];
            welcome.innerHTML = `<p>¡Bienvenid@, <strong>${nombre}</strong>!</p>`;
            toggleLogin();
        } else {
            alert("Credenciales incorrectas.");
        }
    } else {
        if (localStorage.getItem(email)) {
            alert("Este correo ya está registrado.");
            return;
        }
        localStorage.setItem(email, JSON.stringify({ password }));
        alert("¡Registro exitoso!");
        toggleForm();
    }
}

function buscarProducto() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const productos = document.querySelectorAll(".product");
    let encontrados = 0;

    productos.forEach(producto => {
        const texto = producto.innerText.toLowerCase();
        if (texto.includes(input)) {
            producto.style.display = "block";
            encontrados++;
        } else {
            producto.style.display = "none";
        }
    });

    const mensaje = document.getElementById("welcome");
    if (encontrados === 0) {
        mensaje.innerHTML = "<p>No se encontraron productos.</p>";
    } else {
        mensaje.innerHTML = "";
    }
}



