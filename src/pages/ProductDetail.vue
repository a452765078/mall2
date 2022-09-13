<template>
<div class="productDetail">
    <top></top>
    <header-vue></header-vue>
    <product-header-vue></product-header-vue>
    <div class="content">
        <div class="container">
            <div class="productImg">
                <swiper :options="swiperOptions">
                    <swiper-Slide>
                        <img src="/imgs/detail/phone-1.jpg" alt="">
                    </swiper-Slide>
                    <swiper-Slide>
                        <img src="/imgs/detail/phone-2.jpg" alt="">
                    </swiper-Slide>
                    <swiper-Slide>
                        <img src="/imgs/detail/phone-3.jpg" alt="">
                    </swiper-Slide>
                    <swiper-Slide>
                        <img src="/imgs/detail/phone-4.jpg" alt="">
                    </swiper-Slide>

                </swiper>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="productOption">
                    <h2 class="name">小米8</h2>
                    <p class="desc">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红 外人脸解锁 / A</p>
                    <p class="isXiaomi">小米自营</p>
                    <p class="price">
                        <span class="curPrice">2599元</span>
                        <span class="beforePrice"><del>2999元</del></span>
                    </p>
                    <div class="address">
                        <p>
                            <span>北京 北京市 朝阳区 安定门街道</span> <a href="">修改</a>
                        </p>
                        <p class="isHas">
                            有现货
                        </p>
                    </div>
                    <div class="option">
                        <h3 class="optionTitle">选择版本</h3>
                        <div class="optionList clearfix">
                            <div class="optionItem fl" :class="{select:1===optionIndex}" @click="optionIndex=1">6GB+64GB 全网通   1099元</div>
                            <div class="optionItem fl" :class="{select:2===optionIndex}" @click="optionIndex=2">4GB+64GB 移动4G   1049元</div>
                        </div>
                    </div>
                    <div class="option">
                        <h3 class="optionTitle">选择颜色</h3>
                        <div class="optionList">
                            <div class="optionItem">深空灰</div>
                        </div>
                    </div>
                    <div class="sumary">
                        <p class="detail">
                            <span class="detailName">小米8 6GB+64GB 全网通 深灰色</span><span class="lastPrice">1099元</span>
                        </p>
                        <p class="total">
                            <span class="all">总计：1099元</span>
                        </p>
                    </div>
                    <div class="operate clearfix">
                        <div class="addCart fl" @click="addCart">加入购物车</div>
                        <div class="like fl">喜欢</div>
                    </div>
            </div>
        </div>

    </div>
    <service-Vue></service-Vue>
    <bottom-Vue></bottom-Vue>
</div>
</template>
<script>
import top from '@/components/top.vue';
import headerVue from '@/components/header.vue';
import productHeaderVue from '@/components/productHeader.vue';
import serviceVue from '@/components/service.vue';
import bottomVue from '@/components/bottom.vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'

export default {
    name: 'ProductDetail',
    components: {
        top,
        headerVue,
        productHeaderVue,
        serviceVue,
        bottomVue,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOptions: {
                pagination:{
                    el:'.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            optionIndex: 1
        }
    },
    computed: {
        productId() {
            return this.$route.params.id;
        }
    },
    methods: {
        addCart() {
            this.axios.post('/carts',{
                productId:this.productId,
                selected: true
            }).then((res)=>{
                console.log(res.cartTotalQuantity)
                alert("添加购物车成功")
                this.$store.dispatch("saveCartcount",res.cartTotalQuantity)
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}

</script>
<style lang="scss">
.productDetail {
    .content {
        background-color: #FAFAFA;

        .container {
            height: 870px;
            display: flex;

            .productImg {

                width: 567px;
                position: relative;

                .swiper-container {
                    margin-top: 90px;

                    .swiper-slide {
                        display: flex;
                        justify-content: center;

                        img {
                            margin-left: auto;
                            margin-right: auto;
                            width: 384px;
                            height: 486px;
                        }
                    }
                }

                .swiper-button-prev {
                    position:absolute;
                    left: 15px;
                    top: 40%;
                    color: gray;
                    width: 10px;
                    height: 10px;
                }

                .swiper-button-next  {
                    position:absolute;
                    right: 15px;
                    top: 40%;
                    color: gray;
                    width: 10px;
                    height: 10px;
                }

                .swiper-pagination {
                    width: 270px;
                    height: 20px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    margin-top: 15px;

                    .swiper-pagination-bullet {
                        width: 50px;
                        height: 2px;
                        margin-right: 12px;
                        background-color: #999999;
                    }
                }

            }

            .productOption {
                width:584px;
                margin-left:77px;

                .name {
                    font-size: 28px;
                    color: #333333;
                    margin-top:30px
                }

                .desc {
                    font-size:  14px;
                    color: #999999;
                    margin-top:16px
                }

                .isXiaomi {
                    font-size:  16px;
                    color: #FF6700;
                    margin-top:26px
                }

                .price {
                    font-size:  20px;
                    color: #FF6700;
                    margin-top:14px;
                    del {
                        font-size:  14px;
                        color: #999999;
                    }
                }

                .address {
                    border:1px solid #E5E5E5;
                    padding:31px 34px ;
                    box-sizing: border-box;
                    margin-top:28px;
                    span {
                        font-size: 14px;
                        color: #999999;
                    }
                    a {
                        font-size: 14px;
                        color: #FF6700;
                    }
                    .isHas {
                        font-size: 14px;
                        color: #FF6700;
                    }
                }

                .option {   
                    margin-top: 20px;
                    .optionTitle {
                        font-size: 18px;
                        color: #333333;
                    }

                    .optionList {
                        .optionItem {
                            width: 285px;
                            height: 50px;
                            line-height: 50px;
                            text-align: center;
                            border: 1px solid #E5E5E5;
                            margin-right: 8px;
                            margin-top: 20px;
                            &:last-child {
                                margin-right: 0px;
                            }

                            &.select{
                                border:1px solid #FF6600;
                            } 
                        }
                    }
                }

                .sumary {
                    background-color: #FAFAFA;
                    padding: 24px 30px;
                    box-sizing: border-box;
                    margin-top: 50px;
                    .detail {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .detailName {
                            font-size: 14px;
                            color: #333333;
                        }
                        .lastPrice {
                            font-size: 14px;
                            color: #333333;
                        }
                    }
                    .total {
                        margin-top: 18px;
                        .all {
                            font-size: 24px;
                            color: #FF6600;
                        }
                    }
                }
             
                .operate {
                    margin-top: 50px;
                    .addCart {
                        width: 300px;
                        height: 54px;
                        line-height: 54px;
                        background: #FF6600;
                        color: #FFFFFF;
                        text-align: center;
                        margin-right: 21px;
                        cursor: pointer;
                    }
                    .like {
                        width: 142px;
                        height: 54px;
                        line-height: 54px;
                        text-align: center;
                        color: #FFFFFF;
                        background: #BBBBBB;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>