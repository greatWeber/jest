/**
 * 其他问题
 */

 export const polygon = (arr,k)=>{
   let Perimeter = 0;
   for(let i=0;i<arr.length;i++){
     let len = getSide2(arr[i],arr[k]);
     Perimeter+=len;
   }
   let newlen = Perimeter/k;
   let index = 0;
   let rs = [arr[0]];
   while(index<k){
    for(let i = index;i<arr.length;i++){
      let k = i+1;
      if(i+1==arr.length){
        k=0;
      }
      if(getSide2(arr[i],arr[k])>=newlen){
        if(arr[i][0] === arr[k][0]){
          // x坐标相等
          let x = Math.abs(rs[index][0] - arr[i][0]);
          let y = Math.sqrt(Math.pow(newlen,2) - Math.pow(x,2));
          rs.push([arr[i][0],arr[k][1]>arr[i][1]?arr[i][1]+y:arr[i][1]-y]);
          index++;
        }else if(arr[i][1] === arr[k][1]){
          // y坐标相等
          let y = Math.abs(rs[index][1] - arr[i][1]);
          let x = Math.sqrt(Math.pow(newlen,2) - Math.pow(y,2));
          rs.push([arr[i][1],arr[k][0]>arr[i][0]?arr[i][0]+x:arr[i][0]-x]);
          index++;
        }
      }
    }
   }

   return rs;

   /**
    * 三角形求边
    * @param {*} a 
    * @param {*} b 
    */
   function getSide(a,b){
     return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1]));
   }

   function getSide2(a,b){
    return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1])
   }

 }