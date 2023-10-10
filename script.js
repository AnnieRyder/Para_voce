var usuarios = [
    {username: 'Melinda', password: 'teamo'}
];

document.querySelector('.login__form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.querySelector('input[type="id"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (login(username, password)) {
        alert('Login bem sucedido!');
    } else {
        alert('Nome de usuário ou senha incorretos!');
    }
});

function login(username, password) {
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username === username && usuarios[i].password === password) {
            return true;
        }
    }
    return false;
}

function login(username, password) {
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username === username && usuarios[i].password === password) {
            window.location.href = 'suaPagina.html'; 
            return true;
        }
    }
    alert('Nome de usuário ou senha incorretos!');
    return false;
}

