
import {Backtrack, Backtrack2, Backtrack3} from '@/leetcode/backtrack';

describe('回溯算法', ()=>{
  test('生成括号', ()=>{
    const rs = Backtrack(3);
    console.log(rs);
  });

  test('全排列', ()=>{
    const rs = Backtrack2([1, 2, 3]);
    console.log(rs);
  });

  test.only('戳气球问题 ', ()=>{
    const rs = Backtrack3([3, 1, 5, 8]); 
    console.log(rs);

  });
});
