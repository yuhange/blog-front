<template>
  <div class="questions">
    <h1>leetcode</h1>
    <ul v-for="question in questions">
      <li>{{question.ques_id}}. <router-link :to="{name:'question', params:{id:question.ques_id}}">{{question.ques_title}}</router-link> {{question.passrate}} {{question.difficulty}}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'questions',
  computed: {
    ...mapGetters({
      'questions':'questions'
    })
  },
  created () {
      this.$store.dispatch('getQuestions')
  },
}
</script>

<style scoped>
.questions{
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
