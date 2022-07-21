const usuario = document.getElementById("user")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parr = document.getElementById("warnings")
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false 
    parr.innerHTML = ""
    if (usuario.value.length < 3) {
        warnings += 'Usuario no valido'
        entrar = true 
    }
    if (pass.value.length < 8) {
        warnings += 'La contraseña debe tener mas de 8 caracteres'
        entrar = true
    }
}
)