<template>
  <div class="hello">
    <h1>Pages</h1>
    <p v-show="isExistPage">{{ id }}ページ目</p>
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
