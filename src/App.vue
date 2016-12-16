<template>  
  <div id="app">
    <nav class="nav center">
      <ul>
        <li class="router-link-active"><router-link to="/"><i class="fa fa-home"></i>Home</router-link>
        <li><router-link to="/archive"><i class="fa fa-archive"></i>ARCHIVE</router-link></li>
        <li><router-link to="/categories"><i class="fa fa-folder"></i>CATEGORY</router-link></li>
        <li><router-link to="/tags"><i class="fa fa-tags"></i>TAGS</router-link></li>
      </ul>
    </nav>
    <MyTitle></MyTitle>
    <div class="container" >
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
              <router-view></router-view>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <RightBar></RightBar>
        </div>
        <div class="back-top" v-on:click="backTop()">
          <!-- <a  >返回顶部</a>  -->
          返回顶部
        </div> 
      </div>
   </div>
  </div>
</template>

<script>
import RightBar from './components/RightBar'
import MyTitle from './components/MyTitle'
export default {
  name: 'app',
  components: {
    MyTitle,
    RightBar
  },
  methods: {
    backTop() {
      document.documentElement.scrollTop = document.body.scrollTop =0;
    }
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
h1, h2{
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
.nav {
  position: relative;
  padding: 15px;
}
.nav ul {
  margin: 0;
  padding: 0;
}
.nav li {
  font-size: 18px;
  margin: 0 5px 10px 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
.nav a {
  padding: 3px 12px;
  text-decoration: none;
  color: #153535;
  line-height: 100%;
}
.nav a:hover {
  color: #000;
}
.nav .router-link-active a {
  background: #999;
  color: #153535;
  border-radius: 5px;
}

/* right nav */
.nav.right ul {
  text-align: right;
}

/* center nav */
.nav.center ul {
  text-align: center;
}

.back-top {
  /*background: url(./assets/back-top.png) no-repeat;*/
  width:60px; 
  height:50px; 
  position:fixed; 
  right:5%; bottom:10%; 
  /*margin-left:520px; */
  z-index:100; 
  text-align:center; 
  cursor:pointer;
}

@media screen and (max-width: 600px) {
  .nav {
    position: relative;
    min-height: 40px;
  } 
  .nav ul {
    width: 180px;
    padding: 5px 0;
    position: absolute;
    top: 0;
    left: 0;
    border: solid 1px #aaa;
    /*background: #fff url(./assets/menu.png) no-repeat 10px 11px;*/
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
  }
  .nav li {
    display: none; /* hide all <li> items */
    margin: 0;
  }
  .nav .router-link-active {
    display: block; /* show only current <li> item */
  }
  .nav a {
    display: block;
    padding: 5px 5px 5px 32px;
    text-align: left;
  }
  .nav .router-link-active a {
    background: none;
    color: #666;
  }

  /* on nav hover */
  .nav ul:hover {
    background-image: none;
  }
  .nav ul:hover li {
    display: block;
    margin: 0 0 5px;
  }
  .nav ul:hover .router-link-active {
    /*background: url(./assets/check.png) no-repeat 10px 7px;*/
  }

  /* right nav */
  .nav.right ul {
    left: auto;
    right: 0;
  }

  /* center nav */
  .nav.center ul {
    left: 50%;
    margin-left: -90px;
  }

  .back-top {
    display: none;
  }
  
}
</style>
