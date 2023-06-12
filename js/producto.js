// Algortimo para mostrar el formulario al tocar el boton de pedido
// Uso el DOM para llamar a los elementos
const botonIniciador = document.getElementById("botonIniciador")
const hideForm = document.getElementById("contenedorFormularioTotal")
const contenedorFormularioTotal = document.getElementById("contenedorFormularioTotal")


if (botonIniciador) {
    botonIniciador.addEventListener("click", toggleText)
}

function toggleText() {
    hideForm.classList.toggle("show")
    if(toggleText){
        botonIniciador.classList.toggle("hide")
    }
    contenedorFormularioTotal.scrollIntoView({ behavior: "smooth" })
}

// Hago el formulario
// Hago uso del DOM
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const telefono = document.getElementById("telefono")
const mail = document.getElementById("mail")
const cantidad = document.getElementById("cantidad")
const ubicacion = document.getElementById("ubicacion")
const error = document.getElementById("error")
const bien = document.getElementById("bien")
const formularioPedido = document.getElementById("formularioPedido")


if (formularioPedido) {
    formularioPedido.addEventListener("submit", function (event){
        event.preventDefault()
        let aviso = ""
        let entrar = false
        let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if (nombre.value.length <= 2) {
            aviso += "El nombre es muy corto <br>"
            entrar = true
        }
        if (apellido.value.length <= 2) {
            aviso += "El apellido es muy corto <br>"
            entrar = true 
        }
        if (!validarEmail.test(mail.value)) {
            aviso += "El Email no es valido <br>"
            entrar = true
        }
        if (telefono.value.length <=7) {
            aviso += "El teléfono no es valido <br>"
            entrar = true
        }
        if (ubicacion.value.length <= 3) {
            aviso += "La calle no es valida"
            entrar = true
        }
        if (entrar) {
            error.innerHTML = aviso
            bien.innerHTML = ""
        }else{

            const btn = document.getElementById('button');
            event.preventDefault()

                btn.value = 'Enviando...';

            const serviceID = 'default_service';
            const templateID = 'template_rbnxg0l';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Enviar Email';
                alert('Sent!');
                }, (err) => {
                btn.value = 'Enviar Email';
                alert(JSON.stringify(err));
                });
            bien.innerHTML = "Enviado"
            error.innerHTML = ""
            Swal.fire({
                icon: 'success',
                title: '¡Formulario enviado!',
                text: '¡Pronto nos pondremos en contacto contigo para enviarte el producto!',
            })
        }
    })
}