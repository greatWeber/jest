<template>
  <div class="decimalPoint">
      <input type="text" v-model="number" placeholder="请输入数字">
      <input type="number" v-model="n" placeholder="请输入数字">
      <button @click="toFixed">保留{{n}}小数</button>
  </div>
</template>

<script>
import Big from 'big.js';
export default {
    data(){
        return {
            number:'',
            n:2
        }
    },
    methods:{
        toFixed(){
            let n = new Big(this.number).toFixed(+this.n);
            this.number = n;
        }
    }
}
</script>

<style lang="less">

</style>