<template>
<div class="tags">
	<div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
	<div class="tags-all">
		<div v-for="tag in tags" class="tag-box">
			<div class="tag-name">
				<h3><router-link :to="{name: 'tag', params: {id: tag.id}}">{{tag.name}}</router-link></h3>
			</div>
			<div class="tag-count">
				共 {{tag.count}} 篇
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'tags',
	data () {
	    return {
	      loading: false,
	      post: null,
	      error: null,
	      tags: [], 
          apiUrl: 'https://blog-back.herokuapp.com/tags'
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
	      this.error = this.tags = null
	      this.loading = true
	      this.$http.get(this.apiUrl).then((response) => {
	      			this.tags = response.body.data
	      			this.loading = false
	      			this.error = false
                    // console.log(this.categories)
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
.tag-box {
	background: #fff;
	border: 0.5px solid #ddd;
	min-width: 250px;
	min-height: 150px;
	float:left;
	text-align: left;
	padding: 20px;
	margin: 20px;
}

.tag-box a {
	color: #92ABA7;
}


</style>