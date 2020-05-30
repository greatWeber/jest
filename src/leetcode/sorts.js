/**
 * 1. 冒泡排序
 */
export const bubbleSort = (arr)=>{
	const len = arr.length;
  for (let i = 0;i < len;i++) {
		for (let k = i+1;k < len;k++) {
			if(arr[i]>arr[k]){
				[arr[i],arr[k]] = [arr[k],arr[i]]
			}
		}
  }
};
