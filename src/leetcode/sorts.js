/**
 * 1. 冒泡排序
 */
export const bubbleSort = (arr)=>{
  const len = arr.length;
  let flag = false;
  for (let i = 0;i < len;i++) {
    if (flag) return;
    for (let k = 0;k < len - i;k++) {
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
        flag = false;
      } else {
        flag = true;
      }
    }
  }
};
