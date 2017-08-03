<template>
<ul>
  <li v-for="item in items">
    <div>
      <span >className:</span>
      <span>{{item.className}}</span>
    </div>

  </li>
</ul>
</template>

<script>
  export default {
    data () {
      return {
        items: []
      }
    },
    created () {
      this.$http.get('/api/bestpay').then((data) => {
        this.items = data.body.data;
      })
    }
  }
</script>
<style lang="css">

</style>
