
<script>
export default {
  data() {
    return {
      text: 'the render function'
    };
  },
  render(h) {
    // debugger
    return h('div', {
      class: 'div'
    }, [
      this.text,
      h('span', [
        '!',
        h('span', {style: {color: 'red'}}, ['!'])
      ])
    ]);
  }
};
</script>

<style>

</style>
