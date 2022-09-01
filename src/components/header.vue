<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                <img src="../../public/imgs/logo-mi.png" alt="">
            </div>
            <div class="dropdown">
                <ul>
                    <li>
                        小米手机
                        <div class="children clearfix">
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        Redmi红米
                                                <div class="children clearfix">
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">4999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        电视
                                                <div class="children clearfix">
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">3999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                            <div class="item fl">
                                <img src="../../public/imgs/item-box-1.png" alt="">
                                <div class="name">小米9</div>
                                <div class="price">2999元</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headerVue',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
.header {
    background: #FFFFFF;
    .container {
        height: 112px;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #E5E5E5;
        position: relative;
        .logo {
            width: 55px;
            height: 55px;
            img {
                width: 55px;
                height: 55px;
            }
        }
        .dropdown {
            margin-left: 209px;
            ul {
                display: flex;

                li {
                    height: 112px;
                    line-height: 112px;
                    margin-right: 20px;
                    .children {
                        border-top: 1px solid #E5E5E5;
                        position: absolute;
                        width: 1226px;
                        height: 220px;
                        top: 112px;
                        left: 0;
                        display: none;
                        background-color: #FFFFFF;
                        box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                        z-index: 99;
                        .item {
                            width: 16.6%;
                            height: 220px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            line-height: 100%;

                            img {
                                width: 111px;
                                height: 92px;
                                margin-top: 26px;
                            }
                            .name {
                                margin-top: 30px;
                            }
                            .price {
                                margin-top: 8px;
                                color: #FF6600;
                            }
                        }

                    }
                    &:hover {
                        color:#FF6600;
                    }
                    &:hover .children{
                        display: block;
                    }
                }
            }
        }
    }
}
</style>