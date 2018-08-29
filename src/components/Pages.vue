<template>
  <div class="hello">
    <h1>Pages</h1>
    <p v-show="isExistPage">{{ id }}ページ目</p>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  data() {
    const id = this.$route.params.id
    return {
      id,
      isExistPage: !!id,
    }
  },
}
</script>
