// 便于复用头部和底部导航
<template>
  <div>
    home
  <NavHeader/>
  <router-view></router-view>
  <NavFooter/>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
    name:'Home',
    components:{NavHeader,NavFooter}
}
</script>

<style>

</style>