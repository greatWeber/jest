// 贪婪策略 例子

/**
 * 跳跃游戏 II
 * 题目描述
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

输入: [2,3,1,1,4] 输出: 2 解释: 跳到最后一个位置的最小跳跃数是 2。   从下标为 0 跳到下标为 1 的位置，跳  1  步，然后跳  3  步到达数组的最后一个位置。
 */

 export const Jump = (arr)=>{
    let counts = [];
    const jump = (step,count) =>{
        const val = arr[step];
        
        if(val>=arr.length-step-1){ 
            counts.push(count+1);
        }
        for(let i=step+1;i<=val+step;i++){
            jump(i,count+1);
        }
    }
    jump(0,0);
    console.log(counts);
    return counts.reduce((a,b)=>a<b?a:b);
 }

