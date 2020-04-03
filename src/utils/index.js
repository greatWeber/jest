// 工具类

// 事件委托
export const delegate = (element,eventType, selector, fn)=>{
    element.addEventListener(eventType,function(e){
        let el = e.target;
        while(!el.matches(selector)){
            if(element === el){
                el = null;
                break;
            }
            el = el.parentNode;
        }
        el&&fn.call(el,e,el);
    });
    return element;
}

export const toFixed = (number,n) => {
    if(typeof +number!=='number'){
        console.error('输入不是数字');
        return;
    }
    let numberStr = number+'';
    let pointIndex = numberStr.indexOf('.');
    if(pointIndex>-1){
        numberStr = numberStr.replace('.','');
    }else{
        numberStr+='.';
        while(n>0){
            numberStr +='0';
            n--;
        }
        return +numberStr;
    }
    let numberArray = numberStr.split('');
    let len = numberArray.length;
    let oldPointNum = len - pointIndex;
    if(oldPointNum < n){
        while(n-oldPointNum >0){
            numberArray.push(0);
            n--;
        }
    }else if(oldPointNum>n){
         numberArray.length = len - (oldPointNum - n -1);
         len = numberArray.length;
         let i=1;
         let more = numberArray[len-i]>=5?true: false;
         while(more){
            i++;
            more = (+numberArray[len-i])+1 === 10? true: false;
            numberArray[len-i] = more? 0: (+numberArray[len-i])+1;
            console.log(i,len);
         }
        numberArray.pop();
        if(i=== len+1){
            numberArray.unshift(1);
            pointIndex+=1;
        }
    }
    numberArray.splice(pointIndex,0,'.');
    return numberArray.join('');

}