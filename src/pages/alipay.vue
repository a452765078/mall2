<template>
<div class="alipay">
    <cart-order-header :username="username">
        <template #title>
            <h2>订单支付</h2>
        </template>
    </cart-order-header>
    <div class="loading">
        <img src="/imgs/loading-svg/loading-bubbles.svg" alt="">
    </div>
    <div class="content"></div>
    <bottom-Vue></bottom-Vue>
</div>
</template>
<script>
import bottomVue from '@/components/bottom.vue';
import cartOrderHeader from '@/components/cartOrderHeader.vue';
export default {
    name: 'alipayVue',
    components: {
        cartOrderHeader,
        bottomVue
    },
    computed: {
        username() {
            return this.$store.state.username
        }
    },
    data() {
        return {
            orderNo: this.$route.query.orderNo
        }
    },
    mounted() {
        this.submitPay()
    },
    methods: {
        submitPay() {
            this.axios.post('/pay',{
                orderId:this.orderNo,
                orderName: '小米手机',
                amount:0.01,
                payType:1
            }).then(res=>{
                document.body.querySelector(".content").innerHTML = res.content;
                document.getElementById('bestPayForm').submit();
            })
        }
    }
}
</script>
<style lang="scss">
.alipay {
    .loading {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 40%;
        }
    }
}
</style>