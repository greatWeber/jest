<template>
  <div class="render">
      <h1>{{h1}}</h1>
      <render></render>
  </div>
</template>

<script>
import render from './render';
export default {
  components: {
    render
  },
  data() {
    return {
      h1: 'the parent'
    };
  }
};
</script>

<style>

</style>
