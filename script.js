document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del nombre, apellido y contraseña ingresados por el usuario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var contrasena = document.getElementById('contrasena').value;

    // Crear un objeto con los datos del usuario
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        contrasena: contrasena
    };

    // Convertir el objeto a una cadena de texto
    var datosUsuario = JSON.stringify(usuario);

    // Crear un nuevo Blob (objeto binario grande) que contiene la cadena de texto
    var blob = new Blob([datosUsuario], { type: 'text/plain' });

    // Crear un enlace (link) para descargar el Blob como un archivo de texto
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'datos_usuario.txt';

    // Hacer clic en el enlace para descargar el archivo de texto
    link.click();
});
