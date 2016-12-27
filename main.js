 function evaluar(){
    var habla = document.getElementById("habla").value;
    var hora = parseFloat(document.getElementById("hora").value);
    
    var salida = document.getElementById("salida");
    var mensaje =document.getElementById("mensaje");
     
    if (habla == true && hora < 7 || hora > 20)
    {
        //problemas
        salida.innerHTML ="1"
    }
    else
    {
        //noproblemas
        salida.innerHTML ="0"
    }
    if (habla == true && hora < 7 || hora > 20){
        mensaje.innerHTML ="problemas"
    }
     else{
        mensaje.innerHTML ="NOproblemas"
    }
}