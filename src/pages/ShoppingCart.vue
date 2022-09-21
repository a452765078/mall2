<template>
    <div class="shoppingCart">
        <cart-order-header :username="username">
            <template #title>
                <h2>我的购物车</h2>
            </template>
            <template #desc>
                <font size="1" color="#999999">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</font>
            </template>
        </cart-order-header>

        <div class="content">
            <div class="container">
                <div class="cartListWrapper">
                    <div class="cartHeader clearfix">
                        <div class="check fl check-box-col"  @click="selectedToggle(selectedAll)">
                            <i class="icon" :class="{'icon-selected':selectedAll}">√</i>全选
                        </div>
                        <div class="productImg fl productImg-col">图片</div>
                        <div class="productName fl productName-col">商品名称</div>
                        <div class="price fl price-col">单价</div>
                        <div class="count fl count-col">数量</div>
                        <div class="subtotal fl subtotal-col">小计</div>
                        <div class="operate fl operate-col">操作</div>
                    </div>
                    <div class="cartBody">

                        <div class="cartListItem" v-for="product in cartList" :key="product.productId">
                            <div class="cartListItemBox table">
                                <div class="Item-table tr">
                                    <div class="option cell check-box-col product-col" @click="update(product)">
                                        <i class="icon" :class="{'icon-selected':product.productSelected}">√</i>
                                    </div>
                                    <div class="productImg cell productImg-col product-col">
                                        <div class="flex-center">
                                            <img :src="product.productMainImage" alt="">
                                        </div>
                                    </div>
                                    <div class="productName cell productName-col product-col">
                                        {{product.productName}}
                                    </div>
                                    <div class="price cell price-col product-col">
                                            {{product.productPrice}}
                                    </div>
                                    <div class="count cell count-col product-col">
                                        <div class="flex-center">
                                            <div class="count-box">
                                                <span class="minus" @click="minus(product)">-</span>
                                                <span class="quantity">{{product.quantity}}</span>
                                                <span class="add" @click="add(product)">+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subtotal cell subtotal-col product-col">{{product.productTotalPrice}}</div>
                                    <div class="operate cell operate-col product-col">
                                        <div class="flex-center">
                                            <a href="javascript:;" @click="deleteProduct(product)">
                                                <img src="/imgs/icon-close.png" alt="">
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                </div>

                <div class="summary clearfix">
                    <span class="fl">
                        继续购物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共<span class="productCount">{{totalQuantity}}</span>商品，已选择
                        <span class="productCount-selected">{{selectedProductCount}}</span>件
                    </span>

                    <div class="checkOut fr" @click="toOrderCofirm">去结算</div>
                    <div class="total fr">
                        <span class="desc">合计：</span>
                        <span class="totalPrice">{{totalPrice}}元</span>
                    </div>
                </div>
            </div>
        </div>

        <service-Vue></service-Vue>
        <bottom-Vue></bottom-Vue>
    </div>
</template>
<script>
import serviceVue from '@/components/service.vue';
import bottomVue from '@/components/bottom.vue';
import cartOrderHeader from '@/components/cartOrderHeader.vue';
export default {
    name: 'shoppingCart',
    components: {
        serviceVue,
        bottomVue,
        cartOrderHeader
    },
    computed: {
        username() {
            return this.$store.state.username
        }
    },
    data() {
        return {
            cartList:{},
            totalPrice:0,
            totalQuantity:0,
            selectedAll:false,
            selectedProductCount:0
        }
    },  
    mounted(){
        this.getCartList();
    },
    methods: {
        publicGetData(res) {
            this.cartList = res.cartProductVoList;
                this.totalPrice = res.cartTotalPrice;
                this.totalQuantity = res.cartTotalQuantity;
                this.selectedAll = res.selectedAll;
                let selectedProductCount = 0;
                res.cartProductVoList.filter(product => {
                    if(product.productSelected) return product.quantity
                }).forEach(item=>{
                    selectedProductCount = selectedProductCount + item.quantity
                })
                this.selectedProductCount = selectedProductCount
        },
        getCartList() {
            this.axios.get('/carts').then(res=>{
                console.log(res)
                this.publicGetData(res)
            })
        },
        minus(product) {
            let {productId} = product;
            if(product.quantity == 1) {
                alert("数量不能为0")
                return
            }

            let quantity = product.quantity - 1;

            this.axios.put(`/carts/${productId}`,{
                quantity,
                selected: true
            }).then(res=>{
                this.publicGetData(res)
            })
        },
        add(product) {
            let {productId} = product;
            if(product.quantity >= product.productStock) {
                alert("数量大于库存");
                return
            }
            this.axios.post("/carts",{
                productId,
                selected: true
            }).then(res=>{
                this.publicGetData(res)
            })
        },
        selectedToggle(selectedAll) {
            console.log('selectedAll')
            let url = ''
            if(selectedAll) {
                url = 'unSelectAll'
            }else {
                url = 'selectAll'
            }
            this.axios.put(`/carts/${url}`).then(res => {
                this.publicGetData(res)
            })
        },
        update(product) {
            let {productId,quantity,productSelected} = product;
            let isSelected = true;
            if(productSelected) {
                isSelected = false
            }
            this.axios.put(`/carts/${productId}`,{
                quantity,
                selected:isSelected
            }).then(res=>{
                this.publicGetData(res)
            })
        },
        deleteProduct(product) {
            let {productId} = product;
            this.axios.delete(`/carts/${productId}`).then(res => {
                this.publicGetData(res)
            })
        },
        toOrderCofirm() {
            this.$router.push("/orderConfirm")
        }

    }
}

</script>
<style lang="scss">
.shoppingCart {
    .content {
        background-color: #F5F5F5;
        padding-bottom: 114px;
        .container {
            min-height: 676px;
            padding-top: 32px;
            .cartListWrapper {
                background-color: #FFFFFF;
                padding: 32px 72px;
                // public start
                .flex-center {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .icon {
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    line-height: 22px;
                    margin-right: 12px;
                    font-size: 18px;
                    font-weight: bold;
                    color: gray;
                    border: 1px solid #E5E5E5;
                    text-align: center;
                    color:#FFFFFF;
                    cursor: pointer;
                    &.icon-selected {
                        background-color: #FF6600;
                        color: #E5E5E5;
                        &:hover {
                            background-color: #FF6600;
                            color: #E5E5E5;
                        }
                    }
                    &:hover {
                        color: gray;
                    }
                }
                //public end
                .cartHeader {
                    height: 79px;
                    line-height: 79px;
                    text-align: center;
                    .check {
                        text-align: left;
                    }
                }
                .cartBody {
                    border-top: 1px solid #E5E5E5;
                    .cartListItem {
                        border-bottom: 1px solid #E5E5E5;

                        .option {
                            text-align: left;
                        }
                        .productImg {
                            img {
                                width: 80px;
                                height: 80px;
                            }
                        }
                        .count {
                            .count-box {
                                width: 150px;
                                height: 40px;
                                line-height: 40px;
                                display: flex;
                                align-items: center;
                                .minus,.add {
                                    cursor: pointer;
                                    font-size: 22px;

                                }
                                span {
                                    display: inline-block;
                                    width: 48px;
                                    height: 40px;
                                    border: solid 0.5px #E5E5E5;
                                    font-size: 18px;
                                    &:hover {
                                        background-color: #F5F5F5;
                                    }
                                }
                            }
                        }
                        .operate {
                            a {
                                img {
                                    width: 14px;
                                    height: 12px;
                                    text-align: center;
                                }
                            }

                        }
                    }

                }
                //public start
                .check-box-col {
                    width: 90px;
                }
                .productImg-col {
                    width: 90px;
                }
                .productName-col {
                    width: 230px;
                }
                .price-col {
                    width: 220px;
                }
                .count-col {
                    width: 230px;
                }
                .subtotal-col {
                    width: 90px;
                }
                .operate-col {
                    width: 90px;
                }
                // public end 
                .product-col {
                    height: 125px;
                    line-height: 125px;
                    text-align: center;
                    vertical-align: middle;
                }
            }
            .summary {
                margin-top: 20px;
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                color: #666666;
                .productCount {
                    color: #FF6600;
                    margin: 0 7px;
                }
                .productCount-selected {
                    color: #FF6600;
                    margin: 0 7px;
                }
                .total {
                    .desc {
                        color: #FF6700;
                    }
                    .totalPrice {
                        color: #FF6700;
                        font-size: 22px;
                    }
                    margin-right: 31px;
                }
                .checkOut {
                    width: 202px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    color: #FFFFFF;
                    background-color: #FF6700;
                }
            }
        }
    }
}
</style>