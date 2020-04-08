<template>
  <div class="decimalPoint">
      <div>
            <input type="text" v-model="number" placeholder="请输入数字">
            <input type="number" v-model="n" placeholder="请输入数字">
            <button @click="toFixed">保留{{n}}小数</button>
      </div>
      <div>
            <input type="text" v-model="number2" placeholder="请输入数字">
            <input type="number" v-model="n2" placeholder="请输入数字">
            <button @click="toFixed2">保留{{n2}}小数</button>
      </div>
      
  </div>
</template>

<script>
import Big from 'big.js';
import {toFixed, toFixed2} from '@/utils/index';
export default {
    data(){
        return {
            number:'',
            n:2,
            number2:'',
            n2:2,
        }
    },
    methods:{
        toFixed(){
            let n = new Big(this.number).toFixed(+this.n);
            this.number = n;
        },
        toFixed2(){
            //let n = toFixed(this.number2,+this.n2);
            let n = toFixed2(this.number2,+this.n2);
            this.number2 = n;
        }
    }
}
</script>

<style lang="less">

</style>