//  动态规划 集合

/**
 * 题目：戳气球问题
 *  LeetCode 第 312 题
 * 解题思路：https://mp.weixin.qq.com/s/WkjVO1jlBJpghM6Usseg7A
 */

 export const Dynamic = (arr) =>{

    const n = arr.length;
    const points = [];
    points[0] = points[n+1] = 1;
    for(let i=1;i<=n;i++){
      points[i] = arr[i-1];
    }
    let dp = Array(n+2).fill(0).map(x=>Array(n+2).fill(0));
    for(let i=n;i>=0;i--){
      for(let j=i+1;j<=n+1;j++){
          for(let k=i+1;k<j;k++){
            dp[i][j] = Math.max(
              dp[i][j],
              dp[i][k]+ points[i]*points[k]*points[j]+dp[k][j]
              )
          }
      }
    }
    console.log(dp);
    return dp[0][n+1];
 }