<template>
  <div class="hello">
    <button v-on:click="onClickToggle">Toggle</button>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3 v-show="show">{{ hello }}</h3>
    <children :text="hello"></children>
    <router-link to="/pages">pages</router-link>
  </div>
</template>

<script>
import Children from './Children'
export default {
  name: 'HelloWorld',
  components: {
    Children,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hello: 'Hello World!',
      show: false,
    }
  },
  methods: {
    onClickToggle: function () {
      this.show = !this.show
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
