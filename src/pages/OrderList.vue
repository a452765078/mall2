<template>
    <div class="orderList">
        <cart-order-header :username="username">
            <template #title>
                <h2>订单列表</h2>
            </template>
        </cart-order-header>
        <div class="content">
            <div class="container">
                <div class="orderlistInner">
                    <div class="orderItem" v-for="(order,index) in orderList" :key="index">
                        <div class="orderHeader clearfix">
                            <span class="fl">{{order.paymentTime}}| {{order.receiverName}} | 订单号：{{order.orderNo}} {{order.paymentTypeDesc}}</span>
                            <span class="fr">应付金额：<strong>{{order.payment}}元</strong></span>
                        </div>
                        <div class="orderBody">
                            <div class="productList">
                                <div class="productItem" v-for="(product,index) in order.orderItemVoList" :key="index">
                                    <div class="itemImg">
                                            <img :src="product.productImage" alt="">
                                    </div>
                                    <div class="productInfo">
                                        <div class="productName">{{product.productName}}</div>
                                        <div class="productPrice">
                                            {{product.currentUnitPrice}}元 X {{product.quantity}}
                                        </div>
                                    </div>


                                </div>
                            </div>  
                            <div class="payOperate">
                                <a href="javascript:;" v-if="order.status === 20">已付款</a>
                                <a href="javascript:;" v-if="order.status !== 20">立即付款</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="more">
            <!-- <a href="javascript:;" @click="getMoreOrder">加载更多</a> -->
            <div class="" 
            v-infinite-scroll="getMoreOrderScroll"
            :infinite-scroll-disabled="busy"
            infinite-scroll-distance="20"
            >加载更多</div>
        </div>
        <service-vue></service-vue>
        <bottom-vue></bottom-vue>
    </div>
</template>
<script>
import cartOrderHeader from '@/components/cartOrderHeader.vue';
import serviceVue from '@/components/service.vue';
import bottomVue from '@/components/bottom.vue';

export default {
    name: 'orderList',
    components: {
        cartOrderHeader,
        serviceVue,
        bottomVue
    },
    computed: {
        username() {
            return this.$store.state.username
        }
    },
    data() {
        return {
            pageSize:1,
            pageNum:1,
            orderList:[],
            hasNextPage: true,
            isUse: true,
            busy: false
        }
    },
    mounted() {
        this.getOrderList();
        // let that = this;
        // window.addEventListener('scroll',function(){
        //     let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        //     let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
        //     let clientHeight = document.documentElement.clientHeight || window.innerHeight;
        //     let scrollBottom = scrollHeight - scrollTop - clientHeight;
        //     console.log(scrollBottom)
        //     if(scrollBottom < 250) {
        //         if(that.isUse) {
        //             console.log("正在使用中")
        //             that.isUse = false;
        //             that.getMoreOrderScroll()
        //         }

        //     }
        // })
    },
    methods: {
        getOrderList() {
            this.axios.get(`/orders?pageSize=${this.pageSize}&pageNum=${this.pageNum}`).then(res=>{
                this.orderList = res.list;
                this.hasNextPage = res.hasNextPage;
            })
        },
        getMoreOrder() {
            if(this.hasNextPage) {
                this.pageNum++
            }else {
                alert("已经是最后一页了")
                return 
            }
            this.axios.get(`/orders?pageSize=${this.pageSize}&pageNum=${this.pageNum}`).then(res=>{
                // this.orderList.concat(res.list);
                this.orderList = this.orderList.concat(res.list);
                this.hasNextPage = res.hasNextPage;
            })
        },
        getMoreOrderScroll() {
            // this.isUse = false;
            if(this.hasNextPage) {
                this.pageNum++
            }else {
                alert("已经是最后一页了")
                return 
            }
            this.axios.get(`/orders?pageSize=${this.pageSize}&pageNum=${this.pageNum}`).then(res=>{
                console.log("下一页为",this.pageNum);
                this.orderList = this.orderList.concat(res.list);
                this.hasNextPage = res.hasNextPage;
                this.isUse = true;
            })
        }
    }
}
</script>
<style lang="scss">
.orderList {
    .content {
        background-color: #F5F5F5;
        .container {
            .orderlistInner {
                padding-top: 31px;
                padding-bottom: 110px;
                .orderItem {
                    margin-bottom: 31px;
                    border: 1px solid #D7D7D7;
                    &:last-child {
                        margin-bottom: 0px;
                    }
                    .orderHeader {
                        height: 74px;
                        line-height: 74px;
                        padding: 0 43px;
                        box-sizing: border-box;
                        background-color: #FFFAF7;
                    }
                    .orderBody {
                        padding: 0 43px;
                        box-sizing: border-box;
                        background-color: #FFFFFF;
                        position: relative;
                        .productList {
                            .productItem {
                                display: flex;
                                justify-content: left;
                                align-items: center;
                                border-bottom: 1px solid #F5F5F5;
                                .itemImg {
                                    width: 133px;
                                    img {
                                        width: 69px;
                                        height: 89px;
                                    }
                                }
                                .itemName {
                                    width: 940px;
                                }
                            }
                        }
                        .payOperate {
                            position: absolute;
                            right: 43px;
                            top: 40px;
                            a {
                                font-size: 16px;
                                color: #FF6600;
                                &::after {
    
                                    content: '';
                                    margin-left: 10px;
                                    vertical-align: middle;
                                    display: inline-block;
                                    width: 8px;
                                    height: 8px;
                                    border-top: 1px solid #FF6600;
                                    border-right: 1px solid #FF6600;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                    }
                }

            }
        }
    }
    .more{
        text-align: center;
    }
}
</style>