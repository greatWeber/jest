/**
 * 题目描述
 * 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */

export const Backtrack = (n)=>{
    const backtrack = (list,temp,excess,lcnt,rcnt,n)=>{
        if(lcnt>n || rcnt >n) return;
        if(temp.length === 2*n) return list.push(temp);
        if(excess>0){
            temp +=')';
            backtrack(list,temp,excess-1,lcnt,rcnt+1,n);
            temp = temp.substr(0,temp.length-1);
        }
        temp+='(';
        backtrack(list,temp,excess+1,lcnt+1,rcnt,n);
        temp = temp.substr(0,temp.length-1);
    }
    let rs = [];
    let temp = '(';
    backtrack(rs,temp,1,1,0,n);
    return rs;
}
/**
 * 全排列问题
 * @param {*} input 
 */
export const Backtrack2 = (input) =>{
    const backtrack = (input,temp)=>{
        if(temp.length === input.length) return rs.push(temp.slice());
        //console.log(temp,rs)
        for(let i=0;i<input.length;i++){
            if(temp.includes(input[i])) continue;
            temp.push(input[i]);
            backtrack(input,temp);
            temp.pop();
            //console.log(temp);
        }
    }

    let rs = [];
    backtrack(input,[]);
    return rs;
}