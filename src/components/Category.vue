<template>
<div class="category">
	<div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
	<div class="cat-all">
		<div v-for="category in categories" class="cat-box">
			<div class="cat-name">
				<h3><router-link :to="{name: 'category', params: {id: category.id}}">{{category.name}}</router-link></h3>
			</div>
			<div class="cat-count">
				共 {{category.count}} 篇
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	name: 'categories',
	data () {
	    return {
	      loading: false,
	      post: null,
	      error: null,
	      categories: [], 
          // apiUrl: "https://blog-back.herokuapp.com/"
	    }
  	},
  	computed: {
  		...mapGetters({
  			'categories': 'categories'
  		})
  	},
  	created () {
		this.$store.dispatch('getCategories')
	},
  	methods: {
	    
	}
}
</script>

<style scoped>
.cat-box {
	background: #fff;
	border: 0.5px solid #ddd;
	min-width: 180px;
	min-height: 280px;
	float:left;
	text-align: left;
	padding: 20px;
	margin: 20px;
}

.cat-box a {
	color: #92ABA7;
}


</style>