<template>  
  <div id="dashboard">
    <router-link to="/dashboard/home">控制台</router-link>
    <router-link to="/dashboard/editor">编辑</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  components: {
  },
  methods: {
  }
}
</script>

<style>

</style>
