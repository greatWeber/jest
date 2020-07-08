import {delegate, toFixed, currying} from '../../src/utils/index';

describe('utils test', ()=>{
  test('utils 事件委托', ()=>{
    document.body.innerHTML = `
        <ul class="list">
            <li>html<span>点击</span></li>
            <li>js<span>点击</span></li>
            <li>css<span>点击</span></li>
        </ul>
        `;

    let $ul = document.querySelector('.list');
    let $span = document.querySelector('span');
    console.log($ul);
    console.log($span);
    delegate($ul, 'click', 'li', function(e) {
      console.log(e.target);
      console.log(this);
    });
    $span.click();
  });

  test('unitls 保留小数点', ()=>{
    let num = 123.125;
    expect(toFixed(num, 1)).toEqual(123.1);
  });

  test.only('currying 柯里化',()=>{
    function fn(){
      console.log(arguments);
    }
    const fn2 = currying(fn);
    const fn3 = fn2(1)(2); //无法自动触发toString
    // expect(fn3).toEqual(1);
  })
});
