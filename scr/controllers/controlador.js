let nombrebd="Camila"
let correobd= "cami@cami.com"
let telefonobd="6666"
let asuntobd="saludos"
let mensajebd="saludos cordiales"

let cajaNombre = document.getElementById('nombre');
let cajaEmail = document.getElementById('email');
let cajaTelefono = document.getElementById('telefono');
let cajaAsunto = document.getElementById('asunto');
let cajaMensaje = document.getElementById('mensaje');
let botonFormulario=document.getElementById("enviar")


botonFormulario.addEventListener("click",function(evento){


    evento.preventDefault()
   
    let nombreUsu = cajaNombre.value
    let correoUsu = cajaEmail.value
    let telefonoUsu = cajaTelefono.value
    let asuntoUsu = cajaAsunto.value
    let mensajeUsu = cajaMensaje.value

    if(nombrebd==nombreUsu && correobd==correoUsu && telefonobd==telefonoUsu && asuntobd==asuntoUsu && mensajebd==mensajeUsu){
        Swal.fire({
            title: "Bienvenido! "+nombreUsu,
            text: "Tus credenciales son correctas",
            icon: "success"
          })

             
          
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops..."+nombreUsu,
            text: "Tus credenciales son incorrectas",
            
          });
        

    }

    //console.log('Nombre:', nombre)
    //console.log('Email:', email)
    //console.log('Mensaje:', mensaje)

   
});
