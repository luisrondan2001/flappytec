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
    if(registro==""){
        alert ('faltan llenar datos');
    }
    
}

  function sololetras(event){
    if (event.keyCode >48 && event.keyCode  <62) event.returnValue = false;
 } 
 function solonumeros(event){
   if (event.keyCode >65 && event.keyCode <126) event.returnValue = false;

  }
  function registrar(){
    var registro=document.getElementById('registrar1').value;
    var nnombre=document.getElementById('nombre').value;
    var apellido=document.getElementById('apellido').value;
    var direccion=document.getElementById('direccion').value;
    var edad=document.getElementById('edad').value;
    var sex=document.getElementById('sexo').value;

    if(nnombre==""){
        alert("Faltan llenar campos");
        return false;
    }
    if(apellido==""){
        alert("Faltan llenar campos");
    }
    if(direccion==""){
        alert("Faltan llenar campos");
    }
    if(edad==""){
        alert("Faltan llenar campos");
    }
    if(sex==""){
        alert("Faltan llenar campos");
    }

  }
//function sololetras(){
  //  if (event.keyCode >48 && event.keyCode  <62) event.returnValue = false;
 //} 
 //function solonumeros(event){
   //if (event.keyCode >65 && event.keyCode <126) event.returnValue = false;

  //}
 function validanombre(event){
    if (window.event.keyCode<65 || window.event.keyCode>90 && window.event.keyCode<97 || window.event.keyCode>122)
        {
            alert("Solo caracteres");
            event.returnValue = false;
        }
    }
    function valida(event)
    {
        if (window.event.keyCode<48 || window.event.keyCode>57)
        {
                alert("Solo ingresar números");
                event.returnValue = false;
        }
    }
function ref(){
    location.href = "https://e.huawei.com/en/talent/#/ict/become-ict-student";
}
