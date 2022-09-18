<template>
    <div class="orderConfirm">
        <cart-order-header :username="username">
            <template #title>
                <h2>确认订单</h2>
            </template>
        </cart-order-header>
        <div class="content">
            <div class="container">
                <div class="orderConfirmWrapper">
                    <div class="address">
                        <span class="title">收货地址</span>
                        <div class="addressList clearfix">
                            <div class="addressItem fl" :class="{'selectedAddress':selectedId===addressInfo.id}" @click="selectedAddress(addressInfo.id)" v-for="addressInfo in addressInfoList" :key="addressInfo.id">
                                <div class="name">
                                    {{addressInfo.receiverName}}
                                </div>
                                <div class="addressInfo">{{addressInfo.receiverProvince}}&nbsp;{{addressInfo.receiverCity}}
                                    &nbsp;{{addressInfo.receiverDistrict}}
                                    &nbsp;{{addressInfo.receiverAddress}}&nbsp;联系人：{{addressInfo.receiverMobile
                                    }}</div>
                                <div class="operate">
                                    <a href="javascript:;" class="del fl" @click="deleteAddress(addressInfo.id)">删除</a>
                                    <a href="javascript:;" class="edit fr" @click="openModal(addressInfo,'edit')">编辑</a>
                                </div>
                            </div>

                            <div class="addressItem fl addOperate" @click="openModal({},'add')">
                                <div class="icon"></div>
                                <span>添加新地址</span>
                            </div>
                        </div>
                    </div>
                    <div class="cart">
                        <div class="title bold">商品</div>
                        <div class="cartListWrapper">
                            <div class="cartList">
                                <div class="cartItem" v-for="cart in cartList" :key="cart.productId">
                                    <div class="table">
                                        <div class="tr">
                                            <div class="img cell">
                                                <img :src="cart.productMainImage" alt="">
                                            </div>
                                            <div class="name cell">
                                                {{cart.productName}}
                                            </div>
                                            <div class="price cell">
                                                {{cart.productPrice}}元X{{cart.quantity}}
                                            </div>
                                            <div class="total cell">
                                               {{cart.productTotalPrice}}元
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="deliveryMethod">
                        <span class="title bold">配送方式</span>
                        <div class="desc">
                            <span>包邮</span>
                        </div>
                    </div>
                    <div class="invoice">
                        <span class="title bold">发票</span>
                        <div class="desc">
                            <span>电子发票</span>
                            <span>个人</span>
                            <span>商品明细</span>
                        </div>
                    </div>
                    <div class="orderInfo clearfix">
                        <div class="orderInfoWrapper fr">
                            <div class="table">
                                <div class="tr">
                                    <div class="label cell">商品件数：</div>
                                    <div class="desc cell">{{totalQuantity}}件</div>
                                </div>
                                <div class="tr">
                                    <div class="label cell">商品总价：</div>
                                    <div class="desc cell">{{totalPrice}}元</div>
                                </div>
                                <div class="tr">
                                    <div class="label cell">优惠活动：</div>
                                    <div class="desc cell">0元</div>
                                </div>
                                <div class="tr">
                                    <div class="label cell">运费：</div>
                                    <div class="desc cell">0元</div>
                                </div>
                                <div class="tr last">
                                    <div class="label cell">应付总额：</div>
                                    <div class="desc cell strong">{{totalPrice}}元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="operate clearfix">
                            <div class="toPay fr" @click="submitOrder">
                                去结算
                            </div>
                        
                            <div class="toCart fr">
                                返回购物车
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- modal -->
        <div class="modal" v-if="isShowAddressModal">
            <div class="back"></div>
            <div class="modalContent">
                <div class="header">
                    添加收货地址
                </div>
                <div class="body">
                    <div class="form">
                        <div class="row1 input-margin-bottom">
                            <div class="personInfo-1-1  inlineBlock">
                                <input type="text" class="name middle" placeholder="姓名" v-model="receiverInfo.receiverName">
                            </div>
                            <div class="personInfo-1-2  inlineBlock">
                                <input type="text" class="phone middle" placeholder="手机号" v-model="receiverInfo.receiverMobile">
                            </div>
                        </div>
                        <div class="row2 input-margin-bottom">
                            <div class="personInfo-2-1 inlineBlock first-child">
                                <input type="text" class="province mini" placeholder="选择省市区街道" v-model="receiverInfo.receiverProvince">
                            </div>
                            <div class="personInfo-2-2 inlineBlock">
                                <input type="text" class="city mini" placeholder="选择省市区街道" v-model="receiverInfo.receiverCity">
                            </div>
                            <div class="personInfo-2-3 inlineBlock">
                                <input type="text" class="District mini" placeholder="选择省市区街道" v-model="receiverInfo.receiverDistrict">
                            </div>
                        </div>
                        <div class="row3 input-margin-bottom">
                            <div class="personInfo-3-1 inlineBlock">
                                <input type="textarea" class="detailAddress large" placeholder="详细地址" v-model="receiverInfo.receiverAddress">
                            </div>
                        </div>
                        <div class="row4 input-margin-bottom">
                            <div class="personInfo-4-1 inlineBlock">
                                <input type="text" class="number large" placeholder="邮政编号" v-model="receiverInfo.receiverZip">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="operate">
                    <div class="save" @click="addAddress">保存</div>
                    <div class="cancel" @click="closeModal">取消</div>
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
    name: 'orderConfirm',
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
            shippings: {},
            addressInfoList:[],
            cartList: [],
            totalPrice:0,
            totalQuantity:0,
            isShowAddressModal: false,
            receiverInfo: {},
            isSelected:false,
            selectedId:''
        }
    },
    mounted() {
        this.getAddressList();
        this.getCartList();
    },  
    methods: {
        selectedAddress(id) {
            this.selectedId = id;
            // console.log(id)
        },  
        publicGetData(res) {
                this.cartList = res.cartProductVoList;
                this.totalPrice = res.cartTotalPrice;
                this.totalQuantity = res.cartTotalQuantity;
        },
        getCartList() {
            this.axios.get('/carts').then(res=>{
                console.log(res)
                this.publicGetData(res)
            })
        },
        getAddressList() {
            this.axios.get('/shippings').then(res=>{
                this.addressInfoList = res.list;
                console.log(this.addressInfoList)
            })
        },
        openModal(addressInfo,action) {
            this.isShowAddressModal = true;
            this.action = action;
            if(action === 'edit') {
                this.receiverInfo = JSON.parse(JSON.stringify(addressInfo));
                // this.receiverInfo = addressInfo
            }
        },
        closeModal() {
            this.isShowAddressModal = false;
            this.receiverInfo = {}
        },
        submitSave() {
            if(this.action === 'edit') {
                this.editAddress()
            }else if(this.action === 'add') {
                this.addAddress()
            }
        },
        deleteAddress(shippingId) {
            this.axios.delete(`/shippings/${shippingId}`).then(res=>{
                alert("删除成功",res)
                this.getAddressList();
            })
        },  
        editAddress() {
            let {shippingId} = this.receiverInfo;
            this.axios.put(`/shippings/${shippingId}`,{
                ...this.receiverInfo
            }).then(res=>{
                alert("修改成功",res)
                this.addressInfoList();
                this.closeModal()
            })
        },      
        addAddress() {

            this.axios.post('/shippings',{
                ...this.receiverInfo
            }).then(res=>{
                alert("新建地址成功",res)
                this.getAddressList();
                this.closeModal()
            }).catch(err=>{
                alert("新建地址失败",err)
            })
        },
        submitOrder() {
            if(!this.selectedId) {
                alert("需要选择地址")
                return
            }
            this.axios.post("/orders",{
                shippingId:this.selectedId
            }).then(res=>{
                this.$router.push({
                    path:'/orderDetail',
                    query: {
                        orderNo: res.orderNo
                    }
                })
            })
        }
    }
}

</script>
<style lang="scss">
.orderConfirm {
    .content {

        background-color: #F5F5F5;
        .container {
            padding-top: 32px;
            padding-bottom: 204px;
            .orderConfirmWrapper {
                min-height: 844px;
                background-color: #FFFFFF;
                padding: 38px 63px 38px 63px;
                box-sizing: border-box;
                .address {
                    padding-bottom: 64px;
                    border-bottom: solid 1px #E5E5E5;
                    .addressList {
                        .addressItem {
                            width: 266px;
                            height: 180px;
                            border: 1px solid #E5E5E5;
                            margin-right: 7px;
                            margin-bottom: 7px;
                            padding: 18px;
                            box-sizing: border-box;
                            font-size: 14px;
                            &.selectedAddress {
                                border: 1px solid #FF6600;
                            }
                            .name {
                                color: #333333;
                                font-size: 18px;
                                font-weight: bold;
                            }
                            .addressInfo {
                                margin-top: 12px;
                                color: #999999;
                                width: 220px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            .operate {
                                .del {
                                    color: #999999;
                                }
                                .edit {
                                    color: #999999;
                                }
                            }
                        }
                        .addOperate {
                            display: flex;
                            flex-direction: column;
                            justify-content: center ;
                            align-items: center;
                            cursor: pointer;
                            .icon {
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                background-color: #E0E0E0;
                            }
                            span {
                                margin-top: 3px;
                                font-size: 14px;
                                color: #E0E0E0;
                            }
                        }
                    }
                }

                .cart {
                    margin-bottom: 12px;
                    .cartListWrapper {
                        .cartList {
                            border-top: 1px solid #E5E5E5;
                            .cartItem {
                                height: 55px;
                                line-height: 55px;
                                border-bottom: 1px solid #E5E5E5;

                                .img {
                                    width: 60px;
                                    height: 20px;
                                    line-height: 30px;
                                    vertical-align: middle;
                                    margin-right: 12px;
                                    img {
                                        width: 20px;
                                        height: 20px;
                                    }
                                }
                                .name {
                                    width: 620px;
                                    overflow: hidden;
                                    text-overflow:ellipsis; 
                                    white-space: nowrap;
                                }
                                .price {
                                    width: 220px;
                                }
                                .total {
                                    text-align: right;
                                    width: 125px;
                                }
                            }
                        }
                    }
                }

                .orderInfo {
                    padding-bottom: 33px;
                    border-bottom: 1px solid #E5E5E5;
                    .orderInfoWrapper {
                        .label {
                            font-size: 16px;
                            color: #666666;
                            text-align: right;
                            vertical-align: middle;
                            width: 120px;
                        }
                        .desc {
                            font-size: 16px;
                            color: #FF6600;
                            text-align: right;
                            vertical-align: middle;
                            width: 80px;
                        }
                        .strong {
                            font-size: 20px;
                            font-weight: bold;
                        }
                        .last {
                            height: 42px;
                            line-height: 42px;
                        }
                    }
                }
                .operate {
                    margin-top: 37px;
                    margin-bottom: 52px;
                    .toPay {
                        width: 202px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        background-color: #FF6700;
                        color: #FFFFFF;
                        cursor: pointer;
                    }
                    .toCart {
                        width: 202px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        border: solid 1px #D7D7D7;
                        background-color: #FFFFFF;
                        color: #999999;
                        cursor: pointer;
                        margin-right: 12px;
                    }
                }
            }
            // public class start

            .title {
                width: 150px;
                font-size: 20px;
                font-weight: lighter;
                margin-bottom: 21px;
                margin-top: 30px;
                display: inline-block;
            }
            .desc {
                display: inline-block;
                span {
                    font-size: 16px;
                    color: #FF6700;
                    margin-right: 12px;
                }
            }
            .bold {
                font-weight: bold;
            }
            //public class end
        }
    }

    .modal {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        .back {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #000000;
            opacity: 0.5;
        }
        .modalContent {
            width: 660px;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%,-50%);
            // public start 
            .input-margin-bottom {
                margin-bottom: 15px;
            }
            .mini {
                width: 183px;
                height: 40px;
                line-height: 40px;
                padding: 0 15px;
                box-sizing: border-box;
                border: 1px solid #E5E5E5;
            }
            .middle {
                width: 283px;
                height: 40px;
                line-height: 40px;
                padding: 0 15px;
                box-sizing: border-box;
                border: 1px solid #E5E5E5;
            }
            .large {
                width: 579px;
                height: 40px;
                line-height: 40px;
                padding: 0 15px;
                box-sizing: border-box;
                border: 1px solid #E5E5E5;
            }
            .inlineBlock {
                display: inline-block;
            }
            // public end
            .header {
                height: 60px;
                line-height: 60px;
                padding: 0 26px;
                box-sizing: border-box;
                background: #F5F5F5;
            }
            .body {
                padding: 41px;
                background-color: #FFFFFF;
                .row1 {
                    display: flex;
                    justify-content: space-between;
                }
                .row2 {
                    display: flex;
                    justify-content: space-between;
                }
            }
            .operate {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #F5F5F5;
                padding: 21px 41px;
                box-sizing: border-box;
                .save {
                    width: 160px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background-color: #FF6600;
                    color: #FFFFFF;
                    margin-right: 10px;
                }
                .cancel {
                    width: 160px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background-color: #B0B0B0;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>