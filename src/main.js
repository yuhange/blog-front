import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import infiniteScroll from 'vue-infinite-scroll'
import marked from 'marked'
import store from './store'
import Front from './components/Front'
import Home from './components/Home'
import Archive from './components/Archive'
import Category from './components/Category'
import Tags from './components/Tags'
import Post from './components/Post'
import CategoryPost from './components/CategoryPost'
import TagPost from './components/TagPost'
import Login from './components/Login.vue'
import Editor from './components/auth-components/Editor'
import Dashboard from './components/auth-components/Dashboard' 
import DashHome from './components/auth-components/DashHome' 
import auth from './auth'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(infiniteScroll)
Vue.use(Vuex)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter ({
	mode: 'history',
	routes: [
		{path:'/', redirect: '/home'},
		{path: '/home', component: Front,
			children: [
				{path: '/', component: Home},
				{path: 'archive', component: Archive},
				{path: 'categories', component: Category},
				{path: 'tags', component: Tags},
				{path: 'post/:id', component: Post, name: 'post'},
				{path: 'category/:id', component: CategoryPost, name:'category'},
				{path: 'tag/:id', component: TagPost, name:'tag'},]
		},
		{path: '/login', component: Login},
		{path: '/dashboard', component: Dashboard, beforeEnter: requireAuth,
			children: [
				{path: 'home', component: DashHome},
				{path: 'editor', component: Editor},
			]
		},
	]
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
