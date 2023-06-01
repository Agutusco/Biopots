// hago uso del DOM para crear el formulario

const nombre = document.getElementById("nombre")
const tel = document.getElementById("tel")
const mensaje = document.getElementById("mensaje")
const email = document.getElementById("email")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("aviso")
const perfecto = document.getElementById("perfecto")

// hago el algoritmo del formulario

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault()
        let aviso = ""
        let entrar = false
        let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (nombre.value.length <= 2) {
            aviso += 'El nombre es muy corto <br>'
            entrar = true
        }
        if (!validarEmail.test(email.value)) {
            aviso += 'El Email no es valido <br>'
            entrar = true
        }
        if (tel.value.length <= 7) {
            aviso += 'El número de teléfono no es valido <br>'
            entrar = true
        }
        if (entrar) {
            parrafo.innerHTML = aviso
        }else{
            perfecto.innerHTML = 'Enviado'
            parrafo.innerHTML = ''
            Swal.fire({
                icon: 'success',
                title: '¡Formulario enviado!',
                text: '¡Pronto nos pondremos en contacto contigo!',
            })
        }
    })
}