<template>
  <div class="poems">
    <h1>诗词</h1>
    <ul v-for="poem in poems">
      <li>{{poem.id}}. <router-link :to="{name:'poem', params:{id:poem.id}}">{{poem.title}}</router-link> {{poem.author}} {{poem.dynasty}}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'poems',
  computed: {
    ...mapGetters({
      'poems':'poems'
    })
  },
  created () {
      this.$store.dispatch('getPoems')
  },
}
</script>

<style scoped>
.poems{
  text-align: left;
}
/*h1, h2 {
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
*/
a {
  color: #42b983;
}
</style>
