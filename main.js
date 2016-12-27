 function evaluar(){
    var habla = document.getElementById("habla").value;
    var hora = parseFloat(document.getElementById("hora").value);
     
    var salida = document.getElementById("salida");
     
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
}