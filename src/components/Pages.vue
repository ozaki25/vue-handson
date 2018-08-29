<template>
  <div class="hello">
    <h1>Pages</h1>
    <p>{{ title }}</p>
    <p v-show="isExistPage">{{ id }}ページ目</p>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pages',
  data() {
    const id = this.$route.params.id
    return {
      id,
      title: null,
      isExistPage: !!id,
    }
  },
  async mounted() {
    const res = await axios.get(`http://localhost:3000/v1/tasks/${this.id}`)
    this.title = res.data.title || 'no title'
  },
}
</script>
