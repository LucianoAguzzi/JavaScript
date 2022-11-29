let usuarioConEmail = "pepe99@gmail.com"
const usuarioContraseña = 49926678
const nombre = prompt("Ingrese su nombre")
const usuario = prompt("Ingrese su usuario")
let contraseña = prompt("Ingrese su contraseña")

function validarCuenta(usuario, contraseña) {
    if (usuario !== usuarioConEmail) {
        alert("Su usario no es correcto")
        return false
    } else if (contraseña != usuarioContraseña) {
        alert("Su contraseña no es correcta")
        return false
    } else if (contraseña != usuarioContraseña && usuario !== usuarioConEmail) {
        alert("Nigun dato ingresado es correcto")
        return false
    } else return true
}
if (validarCuenta(usuario, contraseña)) {
    saludarALosUsuarios(nombre)
}

function saludarALosUsuarios(nombre) {
    alert(`Bienvenido ${nombre}`)
}
function buscaArroba(usuario) {
    for (let i = 0; i < usuario.length; i++) {
        if (usuario.charAt(i) === "@") {
            console.log(`Ciclo ${i}, caracter: ${usuario.charAt(i)}`)
            return true
        }
    }
    return false
}
if (!buscaArroba(usuario)) {
    usuarioConEmail = prompt("Ingrese nuevo email")
}

function validarLongitudContrasenia(contraseña) {
    if (contraseña.length !== 8) {
        alert("Su contraseña es insegura")
    }
}
validarLongitudContrasenia(contraseña)

function atLeastNumber(contraseña) {
    for (let i = 0; i < contraseña.lenght; i++) {
        if (contraseña.charAt(i).match(/[0-9]/)) {
            return true
        }
    }
    return false
}








if (!atLeastNumber(contraseña)) {
    const respuesta = prompt("Su contraseña debe tener caracters alfanumericos, desea cambiarla?")
    if (respuesta === "Si") {
        contraseña = prompt("Ingrese su contraseña")
    }
}
