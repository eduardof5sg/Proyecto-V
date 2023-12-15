document.addEventListener('DOMContentLoaded', ()=> {
   const form = document.getElementById("formulario1")
   const formReg = document.getElementById("formulario2")
   
   // variables para el login //
   const correo1= document.getElementById("correo")
   const passUno= document.getElementById("pass1")

   //Variables para el Regitro //
   
   const nombre = document.getElementById("nombre")
   const apellidos = document.getElementById("apellidos")
   const telefono = document.getElementById("telefono")
   const correo2 = document.getElementById("correo2")
   const confirmCorreo = document.getElementById("confirmarCorreo")
   const pass = document.getElementById("pass2")
   const confirmPass = document.getElementById("confirmPass")

   form.addEventListener('submit', (e)=> {
    e.preventDefault()
    validaCampos()
   });

   formReg.addEventListener('submit', (e)=> {
    e.preventDefault()
    validaCampos2()
   });

     const validaCampos = () => {

        const correo1Valor= correo1.value.trim();               
        const passUnoValor= passUno.value.trim();
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       

        if(!correo1Valor) {
            validaFallo(correo1, 'introduce un Email')
        } else if (!correoValido.test(correo1Valor)) {
            validaFallo(correo1, 'Email no válido');        
        }else {
            validaOk(correo1, '')
            
        }

        if(!passUnoValor) {
            validaFallo(passUno, 'introduce tu contraseña')
        }else {
            validaOk(passUno, 'el usuario no existe')
        }      
        

     }
    
      const validaFallo = (input, msje) => {
            const formControl = input.parentElement
            const aviso = formControl.querySelector('p')   
            aviso.innerText = msje   

            formControl.className = 'form-control falla'
        }

      const validaOk = (input, msje) => {
            const formControl = input.parentElement
            const aviso = formControl.querySelector('p');
            aviso.innerText = msje;
            formControl.className = 'form-control ok'
      }

      const validaCampos2= () => {
        
        let validacionOk = true;
        const valorNombre = nombre.value.trim();
        const valorApellidos = apellidos.value;
        const valorTelefono = telefono.value;
        const expresionTelefono = /^\d{9}$/;
        const valorCorreo2 = correo2.value;
        const correoValido2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valorConfirmCorreo = confirmCorreo.value;
        const valorPass = pass.value.trim();
        const expresionPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        const valorConfirmPass = confirmPass.value.trim();
        const checkBox = document.getElementById('formRegistroCheckbox');
        const labelCheckbox = document.querySelector('label[for="formRegistroCheckbox"]');


        if(!valorNombre) {
            validaFallo(nombre, 'Introduce un nombre')
            validacionOk=false;
        }else{
            validaOk(nombre, '')
        }

        if(!valorApellidos) {
            validaFallo(apellidos,'Introduce tus apellidos')
            validacionOk=false;
        }else {
            validaOk(apellidos, '')
        }

        if(!valorTelefono){
            validaFallo(telefono, 'Introduce un numero de telefono')
            validacionOk=false;
        }else if (!expresionTelefono.test(valorTelefono)){
            validaFallo(telefono, 'formato de telefono no valido')
            validacionOk=false;
        }else {
            validaOk(telefono,'')
        }

        if(!valorCorreo2){
            validaFallo(correo2, 'introduce un email')
            validacionOk=false;
        }else if (!correoValido2.test(valorCorreo2)){
            validaFallo(correo2, 'email no valido')
            validacionOk=false;
        }else {
            validaOk(correo2 , '')
        }

        if (valorCorreo2 !== valorConfirmCorreo) {
            validaFallo(confirmCorreo, 'El email no coincide');
            validacionOk=false;
        } else {
            validaOk(confirmCorreo, '');
            
        }
        

        if (!valorPass) {
            validaFallo(pass, 'porfavor introduce una contraseña')
            validacionOk=false;
        }else if (!expresionPassword.test(valorPass)){
            validaFallo(pass, 'Incluye almenos  una mayuscula y un numero')
            validacionOk=false;
        }else {
            validaOk(pass, '')
        }

        if (valorPass !== valorConfirmPass) {
            validaFallo(confirmPass, 'la contraseña no coincide')
            validacionOk=false;
        }else {
            validaOk(confirmPass, '')

        
        }
        if (!checkBox.checked) {
            labelCheckbox.style.color = 'red';
            validacionOk=false;
            
        } else {
            labelCheckbox.style.color = '';
        }

        if (validacionOk){
            window.location.href= 'http://127.0.0.1:3000/index.html'
        }

      }

})