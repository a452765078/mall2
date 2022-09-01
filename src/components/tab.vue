<template>
    <div class="tab">
        <div class="container">
            <div class="bgImg">
                <swiper :options="swiperOptions">
                    <swiper-slide>
                        <img src="../../public/imgs/slider/slide-1.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../public/imgs/slider/slide-2.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../public/imgs/slider/slide-3.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../public/imgs/slider/slide-4.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../public/imgs/slider/slide-5.jpg" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                    <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
                    <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
            </div>
            <div class="nav">
                <ul>
                    <li>
                        手机 电话卡
                        <div class="children">
                            <div class="group">
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>小米9</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        手机 电话卡
                        <div class="children">
                            <div class="group">
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                </div>
                                <div class="list">
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                    <a class="item">
                                        <img src="../../public/imgs/item-box-1.png" alt="">
                                        <span>大米</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        手机 电话卡
                        <div class="children">
                        </div>
                    </li>
                    <li>
                        手机 电话卡
                        <div class="children">
                        </div>
                    </li>
                    <li>
                        手机 电话卡
                        <div class="children">
                        </div>
                    </li>
                    <li>
                        手机 电话卡
                        <div class="children">
                        </div>
                    </li>
                    <li>
                        手机 电话卡
                        <div class="children">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
    name: 'tabVue',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOptions: {
                autoplay:true,
                speed:1000,
                pagination:{
                    el:'.swiper-pagination'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
.tab {
    .container {
        height: 451px;
        position: relative;
        .bgImg {
            height: 100%;
            width: 100%;
            position: relative;
            .swiper-container {
                width: 100%;
                height: 451px;
                .swiper-wrapper {
                    .swiper-slide {
                        img {
                            height: 451px;
                            width: 100%;
                        }
                    }

                }
            }
            .swiper-button-prev {
                position: absolute;
                left: 268px;
                top: 50%;
                z-index: 99;
                transform: translateY(-50%);
            }
            .swiper-button-next {
                position: absolute;
                right: 5px;
                top: 50%;
                z-index: 99;
                transform: translateY(-50%);
            }
        }
        .nav {
            position: absolute;
            left: 0;
            top: 0;
            width: 264px;
            height: 425px;
            background-color: #55585A;
            z-index: 9;
            padding-top: 26px;
            color: #FFFFFF;
            font-size: 16px;
            ul {
                .children {
                    height: 451px;
                    width: 962px;
                    position: absolute;
                    left: 264px;
                    top: 0;
                    z-index: 0;
                    display: none;
                    .group {
                        .list {
                            height: 75.1px;
                            display: flex;
                            .item {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 75.1px;
                                line-height: 75.1px;
                                width: 16.6%;
                                img {
                                    width: 35px;
                                    height: 42px;
                                }
                                span {
                                    margin-left: 8px;
                                    font-size: 14px;
                                    color: #333333;
                                }
                            }
                        }
                    }
                }
                li {
                    width: 234px;
                    height: 50px;
                    line-height: 50px;
                    padding-left: 30px;
                    &:hover {
                        background-color: #FF6600;
                    }
                    &:hover .children{
                        display:block;
                        z-index: 99;
                        background-color: #FFFFFF;
                        opacity: 1;
                    }
                } 
            }
        }
    }
}
</style>