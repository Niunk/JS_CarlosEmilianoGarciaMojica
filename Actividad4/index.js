let posArr = 0;
let puls = 0;
let gano = false;
let permPuls = false;
let numsRec= new Array(5);
const arrNumsAl = new Array;
//Devuelve un número aleatorio entre 1 y 4
function numAl(){
    return Math.round(Math.random()*3)+1;
}
//Verifica si ha perdido o ganado en base a la variable res (gano) con valores false (predeterminado) y true en caso de haber completado la secuencia y elimina los divs para crear un nuevo h1 y ponerlo en su lugar
function ver(res){
    let cuerpo = document.querySelector("body");
    let esc = document.createElement("h1");
    let divs = document.querySelector("div");

    esc.setAttribute("id", "res");
    cuerpo.removeChild(divs);

    if(res === false){
        esc.innerText = "Perdiste :(";
        cuerpo.append(esc);
    }
    else{
        esc.innerText = "Ganaste!";
        cuerpo.append(esc);
    }
     
}
//Click a divs de cuadrados y almacena en arreglo para hacer posteriormente comparaciones, permPuls es true cuando acaba el setInterval cuando se iluminan los cuadrados
function amar(){
    if(permPuls === true){
        if(puls <= 5){
            numsRec[puls] = 1;
            puls++;
        }
        if(puls === 5){
            gano = true
            ver(gano);
        }
        else if(numsRec[puls-1]!==arrNumsAl[puls-1]){
            ver(gano);
        }
    }
}

function azu(){
    if(permPuls===true){
        if(puls <= 5){
            numsRec[puls] = 2;
            puls++;
        }
        if(puls === 5){
            gano = true
            ver(gano);
        }
        else if(numsRec[puls-1]!==arrNumsAl[puls-1]){
            ver(gano);
        }
    }
}

function ve(){
    if(permPuls === true){
        if(puls <= 5){
            numsRec[puls] = 3;
            puls++;
        }
        if(puls === 5){
            gano = true
            ver(gano);
        }
        else if(numsRec[puls-1]!==arrNumsAl[puls-1]){
            ver(gano);
        }
    }
}
function roj(){
    if(permPuls === true){
        if(puls <= 5){
            numsRec[puls] = 4;
            puls++;
        }
        if(puls === 5){
            gano = true
            ver(gano);
        }
        else if(numsRec[puls-1]!==arrNumsAl[puls-1]){
            ver(gano);
        }
    }
}
//Hace secuencia de colores iluminados
function nums(){
    if(posArr <= 4)
    {
        let div = document.getElementsByTagName("div");
        numArr = arrNumsAl[posArr];
        let idEnc;
        switch(numArr){
            case 1:
                idEnc = 'amaEnc';
                break;
            case 2:
                idEnc = 'azEnc'; 
                break;
            case 3:
                idEnc = 'verEnc';
                break;
            case 4:
                idEnc = 'roEnc';
                break;
        }
        div[numArr].id = idEnc;
        posArr++;
        setTimeout(()=>{
            let id;
            switch(numArr){
                case 1:
                    id = 'amarillo';
                 break;
                 case 2:
                    id = 'azul';
                 break;
                 case 3:
                    id = 'verde';
                 break;
                 case 4:
                    id = 'rojo';
                 break;
            }
            div[numArr].id = id;
        },1000);
    }
    else{
        permPuls = true;
        clearInterval();
    }
}
//Obtencion de números aleatorios
for(let i = 0; i < 5; i++){
    arrNumsAl[i] = numAl();
}
//Eventos como click del boton y los divs de los cuadrados
window.addEventListener('load', ()=>{
        let boton = document.getElementById('boton');
        let ama = document.getElementById('amarillo');
        let azul = document.getElementById('azul');
        let ver = document.getElementById('verde');
        let ro = document.getElementById('rojo');

        boton.addEventListener('click', ()=>{
            boton.style.display= 'none';
            const padre = document.getElementById('padre');
            padre.style.top = "25%";
            setInterval(nums, 2000);
        })

        ama.addEventListener('click', amar);
        azul.addEventListener('click', azu);
        ver.addEventListener('click', ve);
        ro.addEventListener('click', roj);
})