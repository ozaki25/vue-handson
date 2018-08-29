<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Children',
  data () {
    return {
      msg: 'Welcome to Children',
    }
  },
  props: ['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: #42b883;
}
</style>
