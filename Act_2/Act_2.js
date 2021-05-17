const larArr = Math.floor(Math.random()*10)+1;
const altArr = Math.floor(Math.random()*10)+1;
let uno = false;
let nums = [];
let arr_princ = [];
let prim_term = 0;
let seg_term = 1;
function num(terminos, prim, seg){
   for (let i = 0; i < terminos; i++)
   {
       if(i==0 && uno == true){
        prim = prim + seg;
        seg = prim + seg;
        nums.splice(0,larArr,prim);
      }
       else {
          nums.push(prim);
      }
      seg = prim + seg;
      prim = seg - prim;
   }
}
for(let i=0; i < altArr; i++)
{
  arr_princ.push(new Array);
}
for(let indi in arr_princ)
{
   num(larArr, prim_term, seg_term);
   for(let val of nums)
   {
      arr_princ[indi].push(val);
   }
   prim_term = nums[larArr-2];
   seg_term = nums[larArr-1];
   uno = true;
}
for(let indice in arr_princ)
{
  if(indice % 2){
    arr_princ[indice].reverse();
  }
}
console.log("Largo: " + larArr);
console.log("Alto: " + altArr);
console.log(nums);
console.log(arr_princ);
