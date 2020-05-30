
import {Backtrack, Backtrack2} from '@/leetcode/backtrack';

describe('回溯算法', ()=>{
  test('生成括号', ()=>{
    const rs = Backtrack(3);
    console.log(rs);
  });

  test.only('全排列', ()=>{
    const rs = Backtrack2([1, 2, 3]);
    console.log(rs);
  });
});
