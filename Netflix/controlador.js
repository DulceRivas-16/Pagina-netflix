let inputNombre=document.getElementById("nombre")
let inputCorreo=document.getElementById("correo")
let inputContraseña=document.getElementById("contraseña")
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento)
{
    evento.preventDefault()

    let nombre=inputNombre.value
    let correo=inputCorreo.value
    let contraseña=inputContraseña.value
    let nombreBaseDatos="Dulce"
    let correoBaseDatos="dulceangelina123@gmail.com"
    let contraseñaBaseDatos="2006."

    if(nombre==nombreBaseDatos && correo==correoBaseDatos && contraseña==contraseñaBaseDatos){
        window.location.href="./netflix.html"
    }else{
        alert("datos incorrectos")
    }

}) 