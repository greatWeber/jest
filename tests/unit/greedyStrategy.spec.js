import {Jump} from '@/leetcode/greedyStrategy.js';

describe('贪婪策略测试', ()=>{
  it('跳跃游戏 测试', ()=>{
    expect(Jump([1, 2, 3, 4, 5])).toEqual(3);
    expect(Jump([2, 3, 1, 1, 4])).toEqual(2);
    expect(Jump([5, 3, 1, 1, 4])).toEqual(1);
    expect(Jump([1, 5, 1, 1, 4])).toEqual(2);
  });
});
