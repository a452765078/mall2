<template>
<div class="productHeader">
    <div class="container">
        <div class="left">
            <h4 class="name">{{product.name}}</h4>
            <div class="desc">
                <span>{{product.subtitle}}</span>
                <span>{{product.name}}</span>
            </div>
        </div>
        <div class="right">
            <div class="info">
                <a href="javascript:;">概述</a>
                <a href="javascript:;">参数</a>
                <a href="javascript:;">用户评价</a>
            </div>
            <div class="operate">
                立即购买
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'productHeaderVue',
    components: {

    },
    data() {
        return {
            product:{}
        }
    },
    mounted() {
        this.getProductInfo();
        let targetBox = document.querySelector(".productHeader")
        window.addEventListener("scroll",function(){
            if(document.documentElement.scrollTop >= 250) {
            targetBox.style.position = "fixed";
            targetBox.style.top = 0;
            }else {
            targetBox.style.position = "static"
            }
        })
    },  
    methods: {
        getProductInfo() {
            let productId = this.$route.params.id;
            this.axios.get(`/products/${productId}`).then((res)=>{
                this.product = res
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}

</script>

<style lang="scss">
.productHeader {
    width: 100%;
    background-color:#FFFFFF;
    z-index: 99;
    .container {
        height: 71px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
            display: flex;
            align-items: center;
            span {
                &::before {
                    content: '|';
                    margin: 0 10px;
                    color: #666666;
                }
            }
            .name {
                font-size: 18px;
            }
            .desc {
                font-size: 12px;
                color: #666666;
            }
        }
        .right{
            display: flex;
            align-items: center;
            .info {
                font-size: 14px;
                color: #666666;
                a {
                    font-size: 14px;
                    font-weight: 400;
                    color: #666666;
                    &::after {
                        content: '|';
                        margin: 0 10px;
                    }
                    &:last-child {
                        &::after {
                            content: '';
                        }
                    }
                }
            }
            .operate {
                width: 110px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 12px;
                background-color: #FF7301;
                color: #FFFFFF;
            }
        }


    }
}

</style>