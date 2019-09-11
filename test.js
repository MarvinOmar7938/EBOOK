var nombre = "Carlos";
function saludo(nombre) {
    return "Hola " + nombre;
}
document.getElementById("encabezado").innerHTML = saludo(nombre);
