<template>
<div>
  <div class="box">
    <h2>Most Recent</h2>   
  </div>
  <div class="box">
    <h2><router-link to="/home/questions">LEETCODE</router-link></h2>  <h2><router-link to="/home/todos">TO-DO-List</router-link></h2>
    <h2><router-link to="/home/poems">诗词</router-link></h2>  
    <!-- <div class="tags">
      <div  v-for='question in showQuestions' class="tag">
        <router-link :to="{name: 'question', params:{id:question.ques_id}}" ><i class="fa fa-tag"></i>{{question.ques_title}}</router-link>
      </div>
    </div> -->
  </div>
  <div class="box">
    <h2><router-link to="/categories">CATEGORY</router-link></h2>  
    <div class="categories">
      <div  v-for='category in categories' class="catgy-box">
        <!-- <h2 class="catgy-head"> -->
          <router-link :to="{name: 'category', params:{id:category.id}}" ><i class="fa fa-folder-o">{{category.name}}</router-link>
        </h2>
      </div>
    </div> 
  </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'right-bar',
  data() {
    return {
      error: null,
        loading: null,
    }
  },
  computed: {
    ...mapGetters({
      'categories': 'categories',
      // 'questions':'questions'
    }),
    // showQuestions() {
    //   return this.questions.splice(0, 5)
    // }
  },
  created () {
      // this.$store.dispatch('getQuestions'),
      this.$store.dispatch('getCategories')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2{
  color: #92ABA7;
}

h2 a{
  color: #92ABA7;
}

.box {
  background: -webkit-gradient(linear, 100% 100%, 50% 10%, from(#fff), to(#f3f3f3), color-stop(.1,#fff));
  padding: 20px;
  text-align: left;
  margin: 20px auto;
  display: block;
  min-height: 300px;
  border: 1px solid #ccc;
  border-radius: 2px 2px 2px 2px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}
p{ 
    /*margin-top: 15px;*/
    text-align: justify;
}
.tags {
  text-align: left;
  /*padding: 10px;*/
}
.tags a {
  color: #000;
}
.tag {
  font-size: 16px;
  padding: 2px;
  background: #eee;
  border-radius: 4px;
  float: left;
  margin: 3px;
}
.categories {
  text-align: left;
  /*padding: 10px;*/
}
.categories a {
  color: #000;
}
.catgy-box {
  font-size: 16px;
  padding: 2px;
  background: #eee;
  border-radius: 4px;
  float: left;
  margin: 3px;
}
</style>
