<template>
<div>
  <div class="loading" v-if="loading">
    Loading...
  </div>
  <div v-if="error" class="error">
    {{ error }}
  </div>
  <div class="container">
    <ul v-for="index in totalPage" id="pagination-flickr">
      <!-- <li v-if="showPre" class="previous-off">«Previous</li> -->
      <!-- <li class="active">1</li> -->
      <li v-on:click="getPage(index)"><a v-if="index<8 || index>totalPage-2" href="#">{{index}}</li>
      <!-- <li v-if="showNext" class="next"><a href="?page=2">Next »</a></li> -->
    </ul>
  </div>
  <div v-infinite-scroll="loadMore" infinite-scroll-distance="20">
    <div  v-for='post in posts' class="brief">
      <h3 class="post-head"><router-link :to="{name: 'post', params:{id:post.id}}" >{{post.title}}</router-link></h3>
      <hr>
      <div class="brief-img"></div>
      <div class="box15_ribbon"></div>
    </div>
  </div>
</div>
</template>

<script>
import Rightbar from './Rightbar'
// import apiUrl from '../constant.js'
export default {
  name: 'home',
  components: {
    Rightbar
  },
  currentPage: 1,
  data(){
    return {
      posts: [],
      error: null,
      loading: null,
      apiUrl: 'https://cnodejs.org/api/v1/',
      showPre: false,
      showLast: true,
      showFirst: false,
      showNext: true,
      totalPage: 289
    }
  },
  created () {
      this.fetchData(this.currentPage)
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
    loadMore() {
      //须替换
      var post = {
        id: 1,
        title: '1',
        content: '',
        create_at:'',
        author:'',
        tags: [],
        category: ''
      };
      if(this.posts != null) this.posts.push(post);
    },
    getPage(index) {
      this.currentPage = index
      this.fetchData(index)
    },
    fetchData (currentPage) {
      this.error = this.posts = null
      this.loading = true
      this.$http.get(this.apiUrl+'topics?page='+currentPage+'&limit=20&mdrender=true&tab=share').then((response) => {
              this.loading = false
              this.posts = response.body.data
              // console.log(response.body.post)
          })
          .catch(function(response) {
              this.loading = false
              this.error = 'Ah! Nothing!'
              // console.log(response)
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p::-moz-selection {
  background: #92ABA7; 
} 
p::selection { 
  background: #92ABA7; 
}

h1, h2{
  color: #92ABA7;
}

.brief{
    margin: 40px auto;
    min-height: 210px;
    padding: 20px;
    position:relative;
    background: -webkit-gradient(linear, 100% 100%, 50% 10%, from(#fff), to(#f3f3f3), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);
    -webkit-border-bottom-right-radius: 60px 5px;
    box-shadow: 0 10px 6px -6px #777;
}

.brief:before{
    content: '';
    width: 98%;
    z-index:-1;
    height: 100%;
    padding: 0 0 1px 0;
    position: absolute;
    bottom:0; right:0;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#fff), to(#f9f9f9), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 8px rgba(0,0,0, 0.1);
    -webkit-border-bottom-right-radius: 60px 5px;
    -webkit-transform: skew(2deg,2deg)
                        translate(3px,8px)
}
.brief:after{
    content: '';
    width: 98%;
    z-index:-1;
    height: 98%;
    padding: 0 0 1px 0;
    position: absolute;
    bottom:0; right:0;
    background: -webkit-gradient(linear, 0% 20%, 0% 100%, from(#f3f3f3), to(#f6f6f6), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 0px 0px 8px rgba(0,0,0, 0.1);
    -webkit-transform: skew(2deg,2deg)
                        translate(-1px,2px)
}

.post-head {
  margin-left: 5px;
  text-align: left;
}

.post-head a {
  color: #92ABA7;
}


.brief-img {
  content:url(../assets/logo.png);
}

.box15_ribbon{
    position:absolute;
    top:0; left: 0;
    width: 130px;
    height: 40px;
    background: -webkit-gradient(linear, 555% 20%, 0% 92%, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.0)), color-stop(.1,rgba(0, 0, 0, 0.2)));
    border-left: 1px dashed rgba(0, 0, 0, 0.1);
    border-right: 1px dashed rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotate(-30deg) skew(0,0) translate(-30px,-20px);
}

.breif img {
    width: 100%;
    margin-top: 15px;
}

p{ 
    margin-top: 15px;
    text-align: justify;
}


ul{border:0; margin:0; padding:0;}

#pagination-flickr li{
border:0; margin:5px; padding:0;
font-size:21px;
list-style:none;
}
#pagination-flickr a{
border:solid 1px #DDDDDD;
margin-right:2px;
}
#pagination-flickr .previous-off,
#pagination-flickr .next-off {
color:#666666;
display:block;
float:left;
font-weight:bold;
padding:3px 4px;
}
#pagination-flickr .next a,
#pagination-flickr .previous a {
font-weight:bold;
border:solid 1px #FFFFFF;
} 
#pagination-flickr .active{
color:#ff0084;
font-weight:bold;
display:block;
float:left;
padding:4px 6px;
}
#pagination-flickr a:link,
#pagination-flickr a:visited {
color:#0063e3;
display:block;
float:left;
padding:3px 6px;
text-decoration:none;
}
#pagination-flickr a:hover{
border:solid 1px #666666;
}


/*当屏幕过小时不再显示复杂细节*/
@media screen and (max-width: 600px) {
  .brief{
  }
  .brief:before{
    content:"";
  }
  .brief:after{
    content:"";
  }
  .box15_ribbon {
    display: none
  }
  .breif img {
    display: none
  }
}


</style>
