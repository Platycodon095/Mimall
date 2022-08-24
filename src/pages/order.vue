<template>
  <div>
    <OrderHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
export default {
  name: "Order",
  components: { OrderHeader },
};
</script>

<style>
</style>