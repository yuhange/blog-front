// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import infiniteScroll from 'vue-infinite-scroll'
import Home from './components/Home'
import Archive from './components/Archive'
import Category from './components/Category'
import Tags from './components/Tags'
import Post from './components/Post'
import CategoryPost from './components/CategoryPost'
import TagPost from './components/TagPost'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(infiniteScroll)

const router = new VueRouter ({
	mode: 'history',
	routes: [
		{path: '/', component: Home},
		{path: '/archive', component: Archive},
		{path: '/category', component: Category},
		{path: '/tags', component: Tags},
		{path: '/post/:id', component: Post, name: 'post'},
		{path: '/category/:id', component: CategoryPost, name:'category'},
		{path: '/tag/:id', component: TagPost, name:'tag'}
	]
})
/* eslint-disable no-new */
new Vue({
  // template: '<App/>',
  router: router,
  render: h => h(App)
}).$mount("#app")
