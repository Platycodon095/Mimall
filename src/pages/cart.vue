<template>
  <div>
    <OrderHeader/>
    <NavFooter/>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
 name:'Cart',
 components:{OrderHeader,NavFooter}
}
</script>

<style>

</style>