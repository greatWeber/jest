<template>
  <div class="decimalPoint">
      <input type="text" v-model="number" placeholder="请输入数字">
      <button @click="toFixed">保留两位小数</button>
  </div>
</template>

<script>
import Big from 'big.js';
export default {
    data(){
        return {
            number:''
        }
    },
    methods:{
        toFixed(){
            debugger;
            let n = new Big(this.number).toFixed(2);
            this.number = n;
        }
    }
}
</script>

<style lang="less">

</style>