//Números aleatorios para la longitud y alto del arreglo
const larArr = Math.floor(Math.random()*10)+1;
const altArr = Math.floor(Math.random()*10)+1;
let uno = false;
//Arreglos donde arr_princ[] es el que guarda los demás arreglos
let nums = [];
let arr_princ = [];
//Primeros terminos para la sucesión
let prim_term = 0;
let seg_term = 1;
//Función con parametros de longitud, primer y segundo terminos para la continuación de la serie
function num(terminos, prim, seg){
  //Ciclo para la serie, donde en caso de ser la primera iteración y haber usado al menos una vez la función, los parametros cambian para hacer continuación
   for (let i = 0; i < terminos; i++){
       if(i==0 && uno == true){
        prim = prim + seg;
        seg = prim + seg;
        //Uso de splice para sustituir los valores del arreglo con los siguientes valores de la serie
        nums.splice(0,larArr,prim);
        }
      else{
        nums.push(prim);
      }
      seg = prim + seg;
      prim = seg - prim;
   }
}
//Obtención de arreglos para el principal según el alto dado
for(let i=0; i < altArr; i++){
  arr_princ.push(new Array);
}
//Llamada a la función y asignación a los arreglos de los valores correspondientes, así como el uso de los dos ultimos terminos para usarlos como parametros
//de  entrada a la siguiente llamada de la función
for(let indi in arr_princ){
   num(larArr, prim_term, seg_term);
   for(let val of nums){
      arr_princ[indi].push(val);
   }
   prim_term = nums[larArr-2];
   seg_term = nums[larArr-1];
   uno = true;
}
//Invertir los valores de los arreglos intercalados para la "forma de gusanito"
for(let indice in arr_princ){
  if(indice % 2){
    arr_princ[indice].reverse();
  }
}
console.log("Largo: " + larArr);
console.log("Alto: " + altArr);
console.log(arr_princ);
