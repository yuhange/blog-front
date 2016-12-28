<template>
  <div class="question">
    <h1>{{question.ques_id}}. {{question.ques_title}}</h1>
    <div v-html="question.ques_content"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'question',
  computed: {
    ...mapGetters({
      'question':'question'
    })
  },
  created () {
    this.$store.dispatch('getQuestion', this.$route.params.id)
  },
  watch(){
    this.$store.dispatch('getQuestion', this.$route.params.id)
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
