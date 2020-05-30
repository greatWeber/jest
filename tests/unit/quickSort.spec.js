import {QuickSort, QuickSort2} from '@/leetcode/quickSort.js';

import {Random} from '@/utils/index.js';

let arr = [];
arr = Random(10000000);

describe('快速排序', ()=>{

  test('双指针', ()=>{
    let start = new Date().getTime();
    QuickSort(arr);
    let end = new Date().getTime();
    console.log(end - start);
  });

  test('数组合拼', ()=>{
    let start = new Date().getTime();
    test = QuickSort2(arr);
    let end = new Date().getTime();
    console.log(end - start);

    // console.log(test);
  });
});
