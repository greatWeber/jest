export const QuickSort =(arr)=>{

 const quickSort = (left,right) =>{
    if(left>=right)return;
    let temp = arr[left],
        l = left,
        r = right;
    
        while(l!=r){
            while(l<r && arr[r]>=temp){
                r--;
            }
            [arr[l],arr[r]] = [arr[r],arr[l]];
            while(l<r && arr[l]<=temp){
                l++;
            }
            [arr[l],arr[r]] = [arr[r],arr[l]];
        }
        quickSort(l+1,right);
        quickSort(left,l-1); 
 }

 quickSort(0,arr.length-1);
}

export const QuickSort2 = (arr) =>{
    if(arr.length<2) return arr;
    let temp = arr.shift();
    let left = [],right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<temp){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return QuickSort2(left).concat([temp],QuickSort2(right));
}