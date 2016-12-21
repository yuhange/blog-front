<template>  
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Front from './components/Front'
export default {
  name: 'app',
  components: {
    Front
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  /*background: url(./assets/stucco.png) repeat top left;*/
  background: #eee;
  font-family: cursive, "黑体", Verdana, Helvetica, serif, sans-serif, fantasy;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1, h2, h3{
  /*text-align: left;*/
  color: #92ABA7;
}
hr {
  border: 0.5px dashed #aaa;
}
p::-moz-selection {
  background: #92ABA7; 
} 
p::selection { 
  background: #92ABA7; 
}
</style>
