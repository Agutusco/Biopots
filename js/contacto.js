// hago uso del DOM para crear el formulario

const nombre = document.getElementById("persona")
const tel = document.getElementById("tel")
const mensaje = document.getElementById("message")
const email = document.getElementById("email")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("aviso")
const perfecto = document.getElementById("perfecto")
const btn = document.getElementById('button');
// hago el algoritmo del formulario

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault()
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
            perfecto.innerHTML = ""
        }else{
            
            
                btn.value = 'Enviando...';
            
                const serviceID = 'default_service';
                const templateID = 'template_gyyhpag';

                emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
            perfecto.innerHTML = 'Enviado'
            parrafo.innerHTML = ''
            Swal.fire({
                icon: 'success',
                title: '¡Formulario enviado!',
                text: '¡Pronto nos pondremos en contacto contigo!',
            })
        }
    });
}

