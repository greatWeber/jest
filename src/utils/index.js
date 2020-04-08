// 工具类

// 事件委托
export const delegate = (element, eventType, selector, fn) => {
  element.addEventListener(eventType, function(e) {
    let el = e.target;
    while (!el.matches(selector)) {
      if (element === el) {
        el = null;
        break;
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el);
  });
  return element;
};

export const toFixed = (number, n) => {
  let numberStr = number + "";
  let reg = /^(-|\+)?(\d+(\.\d*)?|\.\d+)$/i;
  if(!reg.test(numberStr)) {
      console.error('输入的数字格式不对');
      return;
  }
  let sign = numberStr.charAt(0) === '-' ? (numberStr=numberStr.slice(1),-1):1;
  console.log(numberStr);
  let pointIndex = numberStr.indexOf(".");
  if (pointIndex > -1) {
    numberStr = numberStr.replace(".", "");
  } else {
    numberStr += ".";
    numberStr+=new Array(n).join('0');
    return +numberStr;
  }
  let numberArray = numberStr.split("");
  let len = numberArray.length;
  let oldPointNum = len - pointIndex;
  if (oldPointNum < n) {
    while (n - oldPointNum > 0) {
      numberArray.push(0);
      n--;
    }
  } else if (oldPointNum > n) {
    
    let i = oldPointNum - n;
    let more = numberArray[len - i] >= 5 ? true : false;
    while (more) {
      i++;
      more = +numberArray[len - i] + 1 === 10 ? true : false;
      numberArray[len - i] = more&&i!==(len+1) ? 0 : +numberArray[len - i] + 1;
      console.log(i, len);
    }
    numberArray.length = len- (oldPointNum-n);
  }
  numberArray.splice(pointIndex, 0, ".");
  return sign===-1?'-'+numberArray.join(""):numberArray.join("");
};

export const toFixed3 = (number,n)=>{
  let numberStr = number + "";
  if(!n) n=0;
  if(numberStr.indexOf('.') === -1) numberStr+='.';
  numberStr += new Array(n + 1).join("0");
  let reg = new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (n + 1) + "})?)\\d*$"); 
  const matches = numberStr.match(reg);
  if(!matches){
      console.error('输入的数字格式不对');
      return;
  }
  
  let sign = matches[1];
  let pointNum = matches[3];
  numberStr = '0'+matches[2];
  let isTop = true;
  let len = pointNum.length;
  if(len === n+2){
    pointNum = numberStr.match(/\d/g);
    if((+pointNum[len-1]) >=5){
      for(let i=len-2;i>=0;i--){
        pointNum[i] = (+pointNum[i]) +1;
        if(pointNum[i] === 10){
          pointNum[i] = 0;
          isTop = i!==1;
        }else break;
      }
    }

    numberStr = pointNum.join('').replace(new RegExp("(\\d+)(\\d{" + n + "})\\d$"),'$1.$2');
  }
  if(isTop) numberStr = numberStr.slice(1);
  return (sign+numberStr)
  
}

export const toFixed2 = (number, d) => {
  var s = number + "";
  if (!d) d = 0;
  if (s.indexOf(".") == -1) s += ".";
  s += new Array(d + 1).join("0");
  if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {
    s = "0" + RegExp.$2;
      var pm = RegExp.$1,
      a = RegExp.$3.length,
      b = true;
      console.log(RegExp.$1,RegExp.$2,RegExp.$3);
    if (a == d + 2) {
      a = s.match(/\d/g);
      if (parseInt(a[a.length - 1]) > 4) {
        for (var i = a.length - 2; i >= 0; i--) {
          a[i] = parseInt(a[i]) + 1;
          if (a[i] == 10) {
            a[i] = 0;
            b = i != 1;
          } else break;
        }
      }
      s = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");
    }
    if (b) s = s.substr(1);
    console.log((pm + s));
    return (pm + s).replace(/\.$/, "");
  }
  return number + "";
};
