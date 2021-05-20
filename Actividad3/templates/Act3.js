//Funcion que revisa si es valido el prompt (izquierda o derecha), revisa si existe la cookie llamando la funcion obtCook() y lleva a los archivos con las imagenes; 
function cam(){
    res = prompt("Elige camino de derecha o izquierda","Pon derecha o izquierda");
    res = res.toUpperCase(); 
    if(res === "DERECHA" || res === "IZQUIERDA")
    {
        //Fecha de 15 min de la cookie
        let fecha = new Date();
        fecha.setTime(fecha.getTime() + 1000*60*15);
        //Variable que tiene valor ingresado de izquierda o derecha(1 o 2)
        val=(res==="IZQUIERDA")?1:2;
        //En caso de no existir ninguna cookie aún, se crea la primera y se recarga la pagina
        if(obtCook("camino") === null){
            document.cookie="camino=" + val + "; expires=" + fecha.toGMTString();
            location="./Act3.html";
        }
        //En otro caso, se asigna a variables los valores (la cookie 1 y la ingresada la segunda vez) y se concatenan como cadenas para hacer comparaciones
        else{
            let arr_caminos = new Array(2);
            arr_caminos[0] = obtCook("camino");
            arr_caminos[1] = val;
            cam1 = arr_caminos[0];
            cam2 = arr_caminos[1];
            camino = cam1.toString() + cam2.toString();
            console.log(arr_caminos[0]);
            switch(camino)
            {
                case '11':
                    location="./Casa.html";
                    document.cookie="camino=1; expires=" + fecha.toGMTString();
                    break;
                case '12':
                    location="./Arbol.html";
                    document.cookie="camino=2; expires=" + fecha.toGMTString();
                    break;
                case '21':
                    location='./Hongo.html';
                    document.cookie="camino=3; expires=" + fecha.toGMTString();
                    break;
                case '22':
                    location='./Bruja.html';
                    document.cookie="camino=4; expires=" + fecha.toGMTString();
                    break;
            }
        }
    } //Caso de ingresar algo no válido
    else{
        alert("Esa no es una opción válida");
        location="./Act3.html";
    }
}
//Revisa si existe la cookie
function obtCook(nom){
      let cookies = document.cookie;
      let arr_cookies = cookies.split('; ');
      for(let val of arr_cookies){
        let valor = val.split("=")
        if(valor[0] === nom ){
            return valor[1];
        }
    }
    return null;
}
//1 seg para que aparezca el prompt
let temp = setTimeout(cam, 1000);