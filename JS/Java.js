function ingresar(){
    var correo=document.getElementById('correo').value;
    var enviar=document.getElementById('enviar').value;
    var contraseña=document.getElementById('password').value;

    if(correo=="#"){
        alert('success');
        window.open('GraciasporSuscribirte.html')
    }else{
        alert('Por favor ingrese su correo');
    }
    if(enviar==""){
        alert('Porfavor rellene los campos anteriores');
    }
    if(contraseña==""){
        alert('Porfavor ingrese su contraseña');
    }
    



}