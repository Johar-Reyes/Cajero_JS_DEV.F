

let nombre = sessionStorage.getItem('usuario')
//document.addEventListener('DOMContentLoaded', function(){
    //document.getElementById('usuario').innerText = `Bienvenido ${sessionStorage.getItem('usuario')}`
    
//});
//console.log(`Hola, mi nombre es ${nombre}`)

//alert(`Bienvenido ${nombre}`)
swal("Bienvenido",` ${nombre}`, "success");

/*document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('usuario').innerText = `Bienvenido ${sessionStorage.getItem('usuarios')}`
    
});*/
//var saldoinicial = 0;

/*document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('usuario').innerText = `Bienvenido ${sessionStorage.getItem('usuarios')}`
});*/
function Mostrar( id ){
//    document.getElementById("consulta").style.display = "block";
    const el = document.getElementById(id)
    el.classList.add("visible")
    el.classList.remove("invisible")
}

function Ocultar(id){
//    document.getElementById("consulta").style.display = "none";
    const el = document.getElementById(id)
    el.classList.add("invisible")
    el.classList.remove("visible")
}


function Mostrar_Ocultar(){
    const consulta = document.getElementById("consulta");
    if (consulta.className === "invisible"){
        document.getElementById("Saldo");//.value="650";
        Mostrar("consulta");
        
    }
    
    else{
        Ocultar("consulta");
    }
    
}


function Ingresar(){
    //variables
    let Cant = Number(document.getElementById('CantIngresada').value);
    let Cantidad = Number(document.getElementById('Saldo').value);
    let saldo = Cantidad+Cant;
    
    if(saldo > 990){
        //La cuenta no puede tener mas de $990
        swal("Lo sentimos", "La cuenta no puede tener mas de $990","info");

    }
    else if(Cant <= 0){
        swal("Ingresa una cantidad valida", "Solo puedes ingresar numeros mayores a 0","info");
        //No se pueden ingresa un numero igual o menor a cero
    }
    else if(isNaN(Cant)){
        //La cuenta no puede tener mas de $990
        swal("Ingresa una cantidad valida", "No puedes ingresar letras o simbolos","info");
    }
    else{
        //Notifica la cantidad que retiraste y tu saldo total
        swal("Añadiste correctamente la cantidad de:",`$${Cant} pesos, tu saldo actual es de $${saldo} pesos`, "success");
        document.getElementById('Saldo').value = saldo;
        document.getElementById('CantIngresada').value="";     
        
        
        
    }
    
}
function Retirar(){
    let Cant = Number(document.getElementById('CantIngresada').value);
    let Cantidad = Number(document.getElementById('Saldo').value);
    //saldoinicial = document.getElementById('Saldo').value;
    let saldo = Cantidad-Cant;
    if(saldo < 10){
        //alert("la cuenta no puede tener menos de $10")
        swal("Lo sentimos", "La cuenta no puede tener menos de $10","info");
        
    }
    else if(isNaN(Cant)){
        swal("Ingresa una cantidad valida", "No puedes ingresar letras o simbolos","info");
    }
    else if(Cant <= 0){
        swal("Ingresa una cantidad valida", "Solo puedes ingresar numeros mayores a 0","info");
    }
    else{
        swal("Retiraste correctamente la cantidad de:",`$${Cant} pesos, tu saldo actual es de $${saldo} pesos`,"success");
        document.getElementById('Saldo').value = saldo;
        document.getElementById('CantIngresada').value="";
    }
    
}





function CerrarSesion(){

    window.location.href = "index.html";
    sessionStorage.clear()
}






 
/*function showContent(id,e) {
    document.getElementById("error").style.display='none';

    if (e.checked) {
        document.getElementById(id).style.display='block';
    }else{
        document.getElementById(id).style.display='none';
    }
}

function deposito() {
    document.getElementById("error").style.display='none';

    var valor=parseInt(document.getElementsByName("valor1")[0].value);
    if(!isNaN(valor))
    {
        saldo=saldo+valor;
        document.getElementById("saldo").innerHTML=saldo;
    }
}

function retiro() {
    document.getElementById("error").style.display='none';

    var valor=parseInt(document.getElementsByName("valor2")[0].value);
    if(!isNaN(valor))
    {
        if(valor<=saldo)
        {
            saldo=saldo-valor;
            document.getElementById("saldo").innerHTML=saldo;
        }else{
            document.getElementById("error").innerHTML="No tienes el saldo suficiente";
            document.getElementById("error").style.display='block';
        }
    }

}

if( saldo < 990){
    alert("No puedes tener mas de $990 en tu cuenta")
}
else if(saldo > 10){
    alert("No puedes tener menos de $10 en tu cuenta")
}*/