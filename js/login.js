function login(){
    
    let usuarios = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;


    if(usuarios  == "Johar" && password == "1234") {
        
        //guardamos en sesion storage
        sessionStorage.setItem("usuario",usuarios);
        //guardamos en local storage
        //localStorage.setItem('usuario', usuarios);
        
        window.location= "cajero.html";
    }
    else if(usuarios  == "Alan" && password == "4321"){
        //guardamos en sesion storage
        sessionStorage.setItem("usuario",usuarios);
        window.location= "cajero-2.html";
    }
    else if(usuarios  == "Juan" && password == "1111"){
        //guardamos en sesion storage
        sessionStorage.setItem("usuario",usuarios);
        window.location= "cajero-3.html";
    }
    else{
        //alert
        swal ( "Oops" ,  "Por favor ingresa un usuario o contraseña valido" ,  "error" )
        
        
    }
    
}

