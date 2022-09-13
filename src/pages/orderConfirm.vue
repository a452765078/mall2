<template>
    <div class="orderConfirm">
        <order-header></order-header>
        <service-Vue></service-Vue>
        <bottom-Vue></bottom-Vue>
    </div>
</template>
<script>
import serviceVue from '@/components/service.vue';
import bottomVue from '@/components/bottom.vue';
import orderHeader from '@/components/orderHeader.vue';
export default {
    name: 'orderConfirm',
    components: {
        serviceVue,
        bottomVue,
        orderHeader
    }
}

</script>
<style lang="scss">

</style>