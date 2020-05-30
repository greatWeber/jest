<template>
  <div class="list-wrapper">
      <h2 class="title">首页</h2>
      <ul>
          <router-link
          v-for="(item,i) in list"
          :key="i"
          :to="{name:item.name}"
          class="list-item">{{item.meta.title}}</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    console.log(this.$router);
    this.list = this.$router.options.routes.slice(1);
    console.log(this.list);
  }
};
</script>

<style lang="less">
.list-wrapper {
    .title {
        line-height: 80px;
    }
    .list-item {
        display: block;
        line-height: 50px;
        padding: 0 20px;
        text-align: left;
        border-top: 1px solid #ccc;
        color: #333;
    }
}
</style>
