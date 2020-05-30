<template>
  <div class="wrapper">
      <h2 class="title">生成括号</h2>
      <div class="input-box">
          <input type="text" class="input-text" v-model="input"/>
          <button class="input-btn" @click="handleSubmit">确认</button>
          <p class="debugger-box" @click="isDebugger=!isDebugger">
                <span class="debugger" v-if="isDebugger==false">断点调试</span>
                <span class="debugger" v-else>取消断点</span>
          </p>

      </div>
      <div class="result">{{result}}</div>
  </div>
</template>

<script>
import {Backtrack} from '@/leetcode/backtrack';
export default {
  data() {
    return {
      input: '',
      result: '',
      isDebugger: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.isDebugger) {
        debugger;
      }
      this.result = Backtrack(this.input);
    }
  }
};
</script>

<style lang="less">
.wrapper {
    padding: 20px;

    .title {
        line-height: 60px;
        border-bottom: 1px solid #ccc;
    }

    .input-box {
        padding: 20px 0;
        .input-text {
            width: 200px;
            height: 50px;
            line-height: 50px;
            vertical-align: middle;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-indent: 10px;
        }
        .input-btn {
            vertical-align: middle;
            width: 80px;
            height: 50px;
            background: #18b2f1;
            color: #fff;
            border: none;
            font-size: 20px;
            border-radius: 5px;
            margin-left: 10px;
        }
        .debugger-box {
            display: inline-block;
            vertical-align: middle;
        }
        .debugger {
            color: #999;
            padding-left: 10px;
        }
    }

    .result {
        width: 500px;
        padding: 30px 20px;
        background: #eee;
    }
}
</style>
