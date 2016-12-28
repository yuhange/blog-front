<template>
  <div class="poem">
    <h1>{{poem.title}}</h1>
    <p> [{{poem.dynasty}}] {{poem.author}}</p>
    <div v-html="poem.content"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'poem',
  computed: {
    ...mapGetters({
      'poem':'poem'
    })
  },
  created () {
    this.$store.dispatch('getPoem', this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.question {
  text-align: left;
  padding: 20px;
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
