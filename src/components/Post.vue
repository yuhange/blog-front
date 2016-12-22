<template>
  <div>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="container">
    	<!-- <div class="row"> -->
    		<!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> -->
    			<div class="post">
    				<div class="head">
    					<div class="title">
    						<h1>{{post.title}}</h1>
    					</div>
    					<div class="info">
    						<div class="author"><i class="fa fa-user"></i>{{post.author}}</div>
    						<div class="date"><i class="fa fa-calendar"></i>{{post.create_at}}</div>
    						<div class="category"><i class="fa fa-folder-o"></i>{{post.category}}</div>
    						<div class="tags">
    							<ul v-for="tag in post.tags">
    								<li><i class="fa fa-tag"></i>{{tag}}</li>
    							</ul>
    						</div>
    					</div>
    				</div>
            <br>
    				<hr>
    				<div v-html="post.content" class="content">
    				</div>
    			<!-- </div> -->
    		<!-- </div> -->
    	</div>
      
    </div>
  </div>

 </template>

 <script>
import 'highlight.js/styles/googlecode.css'
import {API_ROOT} from '../constant'
export default {

	name: 'post',
	data () {
	    return {
	      loading: false,
	      post: null,
	      error: null,
	      post: {
	      	id: 1,
	      	title: '1',
	      	content: '',
	      	create_at:'',
	      	author:'',
	      	tags: [],
	      	category: ''
	      },
	      // apiUrl: API_ROOT+'post/'+this.$route.params.id
        // apiUrl: 'http://localhost:8083/post/1'
	    }
  	},
  	created () {
	    this.fetchData()
  	},
	watch: {
	    '$route': 'fetchData'
	},
  	methods: {
	    fetchData () {
	      this.error = this.post = null
	      this.loading = true
	      this.$http.get(API_ROOT+'post/'+this.$route.params.id).then((response) => {
	      			this.post = response.body.data
              // console.log(this.post.content)
	      			var marked = require('marked');
              marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false,
                highlight: function (code) {
                  return require('highlight.js').highlightAuto(code).value;
                }
              });
	      			this.post.content = marked(this.post.content);
					// console.log(marked(this.post.content));
	      			this.loading = false
	      			this.error = false
                    // console.log(response.body.post)
                })
                .catch(function(response) {
                	this.loading = false
	      			    this.error = 'Nothing!'
                    // console.log(response)
                })
            }
	}
}
</script>

<style scoped>
.content::-moz-selection {
  background: #92ABA7; 
} 
.content::selection { 
  background: #92ABA7; 
}
.head {
	margin-left: 40px;
} 
.info {
	color: #999;
}
.author {
	margin-right: 10px;
	float: left;
}
/*.author:before {
	content: url(../assets/author.png);
}*/
.date {
	margin-right: 10px;
	float: left;
}
/*.date:before {
	content: url(../assets/date.png);
}*/
.category {
	margin-right: 10px;
	float: left;
}
/*.category:before {
	content: url(../assets/category.png);
}*/
.tags {
	/*position: relative;*/
	margin-right: 10px;
	float: left;
}

.tags ul {
  display: inline;
  margin: 0;
  padding: 0;
}

.tags li {
	float: left;
	list-style: none;
	display: inline-block;
	margin-left: 5px;
}
/*
.tags li:before {
	content: url(../assets/tag.png);
}
*/
.content {
  margin-top: 20px;
	text-align: left;
	padding: 20px;
  line-height: 35px;
}
.content:first-letter {
	font-size: xx-large;
}
h1, h2{
  text-align: left;
  color: #92ABA7;
}
.post{
    margin: 40px auto;
    min-height: 1210px;
    padding: 10px;
    position:relative;
    background: -webkit-gradient(linear, 100% 100%, 50% 10%, from(#fff), to(#f3f3f3), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);
    -webkit-border-bottom-right-radius: 60px 5px;
    box-shadow: 0 10px 6px -6px #777;
}

.post:before{
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
.post:after{
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

.post img {
    width: 100%;
    margin-top: 15px;
}

/*p{ 
    margin-top: 15px;
    text-align: justify;
}*/

/*当屏幕过小时不再显示复杂细节*/
@media screen and (max-width: 600px) {
  .post{
  }
  .post:before{
    content:"";
  }
  .post:after{
    content:"";
  }
  .post img {
    display: none
  }
}

</style>

