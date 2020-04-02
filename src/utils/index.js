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