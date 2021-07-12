
function ref(event){
    window.location.assign('https://e.huawei.com/en/talent/#/ict/become-ict-student');
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
  function sololetras(event){
    if (event.keyCode >48 && event.keyCode  <62) event.returnValue = false;
 } 
 function solonumeros(event){
   if (event.keyCode >65 && event.keyCode <126) event.returnValue = false;

  }