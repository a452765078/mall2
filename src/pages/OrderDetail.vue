<template>
    <div class="orderDetail">
        <top-vue></top-vue>
        <cart-order-header :username="username">
            <template #title>
                <h2>确认订单</h2>
            </template>
        </cart-order-header>
        <div class="orderDetailContent">
            <div class="container">
                <div class="orderDetailContentInner">
                    <div class="orderInfo-address clearfix">
                        <div class="img">
                            <img src="/imgs/icon-gou.png" alt="">
                        </div>
                        <div class="desc">
                            <h2>订单提交成功！去付款咯</h2>
                            <div class="detailInfo">
                                <div class="tip">请在<span>0小时30分内</span>完成付款，超时后将取消订单</div>
                                <div class="desc-address">{{receiverInfo}}</div>
                            </div>
                        </div>
                        <div class="totalPay fr">
                            <div class="NeedTotalPay">应付总额：<span>2198元</span></div>
                            <div class="orderDetailToggle" @click="toggle">
                                订单详情
                                <div class="toggleIcon" :class="{'activeToggle':isShow}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="orderInfo-cart"  :class="{'show':isShow}">
                        <div class="table orderInfo-cartInner">
                            <div class="tr">
                                <div class="cell label">订单号：</div>
                                <div class="desc">{{orderNo}}</div>
                            </div>
                            <div class="tr">
                                <div class="cell label">收货信息：</div>
                                <div class="desc">{{receiverInfo}}</div>
                            </div>
                            <div class="tr">
                                <div class="cell label">商品名称：</div>
                                <div class="desc">
                                    <div class="descItem" v-for="(product,index) in orderItemVoList" :key="index">{{product.productName}}</div>
                                    </div>
                            </div>
                            <div class="tr">
                                <div class="cell label">发票信息：</div>
                                <div class="desc">电子发票 个人</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payMethod">
                    <h3 class="title">请选择以下付款方式</h3>
                    <h4 class="payPlatform">支付平台</h4>
                    <div class="plateformList clearfix">
                        <a class="item fl">
                            <div class="itemImg" @click="submitPay(1)">
                                <img src="/imgs/pay/icon-ali.png" alt="">
                            </div>

                        </a>
                        <a class="item fl">
                            <div class="itemImg" @click="submitPay(2)">
                                <img src="/imgs/pay/icon-wechat.png" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="wechatModal" v-if="isShowWechatModal">
            <div class="back"></div>
            <div class="body">
                <div class="tip">
                    <img src="/imgs/pay/icon-scan.png" alt="">
                </div>
                <div class="code">
                    <div class="header">微信支付
                        <icon @click="isShowWechatModal=false">
                            <img src="/imgs/icon-close.png" alt="">
                        </icon>
                    </div>
                    <div class="content">
                        <img :src="wechatImgURL" alt="">
                    </div>
                    <div class="footer">
                        <p>请使用<span>微信</span>扫一扫</p>
                        <p>二维码完成支付</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="payTip" v-if="isShowWechatPayModal">
            <div class="content">
                <div class="payProblem">
                    支付遇到问题
                </div>
                <div class="confirm" @click="payEnd">已完成支付</div>
            </div>
        </div>

        <service-vue></service-vue>
        <bottom-vue></bottom-vue>
    </div>
</template>
<script>
import topVue from '@/components/top.vue';
import cartOrderHeader from '@/components/cartOrderHeader.vue';
import serviceVue from '@/components/service.vue';
import bottomVue from '@/components/bottom.vue';
import QRCode from 'qrcode'
export default {
    name: 'orderDetail',
    components: {
        topVue,
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
            isExpand:false,
            isShow: false,
            orderNo: this.$route.query.orderNo,
            orderItemVoList:[],
            receiverInfo:'',
            wechatImgURL: '',
            isShowWechatModal: false,
            T: '', // 轮询状态
            isShowWechatPayModal: false
        }
    },
    mounted() {
        this.getOrderDetail()
    },  
    methods: {
        toggle() {
            this.isShow = !this.isShow
        },
        getOrderDetail() {

            this.axios.get(`/orders/${this.orderNo}`).then(res=>{
                this.orderItemVoList = res.orderItemVoList;
                this.receiverInfo = `${res.shippingVo.receiverName} ${res.shippingVo.receiverMobile} ${res.shippingVo.receiverProvince}
                 ${res.shippingVo.receiverCity} ${res.shippingVo.receiverDistrict} ${res.shippingVo.receiverAddress}`
            })
        },
        submitPay(payType) {
            if(payType === 1) {
                window.open(`/#/alipay?orderNo=${this.orderNo}`,"_blank")
            }else if(payType ===2){
                this.isShowWechatModal = true;
                this.axios.post('/pay',{
                orderId:this.orderNo,
                orderName: '小米手机',
                amount: 0.01,
                payType
                }).then(res=>{
                    this.loopGetWechatPayStatus()
                    QRCode.toDataURL(res.content).then(url => {
                        this.wechatImgURL = url;
                    }).catch(err=>{
                        console.log(err)
                    })
                })
            }
        },
        loopGetWechatPayStatus() {
            this.T = setInterval(()=>{
                this.axios.get(`/orders/${this.orderNo}`).then((res) => {
                    if(res.status === 20) {
                        this.isShowWechatModal = false;
                        this.isShowWechatPayModal = true;
                        clearInterval(this.T)
                    }
                })
            },5000)
        },
        payEnd() {
            this.isShowWechatPayModal = false;
            this.$router.push('/orderList')
        }

    }
}
</script>
<style lang="scss">
.orderDetail {
    .orderDetailContent {
        background-color: #D7D7D7;
        padding-top: 32px;
        padding-bottom: 130px;
        .orderDetailContentInner {
            background-color: #FFFFFF;
            margin-bottom: 30px;
            padding: 62px 53px 0px 53px;
            .orderInfo-address {
                padding-bottom: 30px;
                border-bottom: 1px solid #D7D7D7;
                display: flex;
                position: relative;
                .img {
                    width: 70px;
                    height: 70px;
                    line-height: 80px;
                    vertical-align: middle;
                    background-color: #c5e0ce;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 40px;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20%;
                    }
                }
                .desc {
                    margin-top: 8px;
                    h2 {
                        font-size: 24px;
                    }
                    .detailInfo {
                        margin-top: 20px;
                        font-size: 14px;
                        color: #666666;
                        line-height: 22px;
                        span {
                            color: #FF6600;
                        }
                    }
                }
                .totalPay {
                    position: absolute;
                    top: 12px;
                    right: 0px;
                    .orderDetailToggle {
                        margin-top: 25px;
                        .toggleIcon {
                            margin-left: 8px;
                            display:inline-block;
                            width: 10px;
                            height: 10px;
                            background-color: transparent;
                            border-top: solid 2px #666666;
                            border-right: solid 2px #666666;
                            transform: rotate(135deg);
                            transition: all 0.5s;
                        }
                        .activeToggle {
                            transform: rotate(315deg);
                        }
                    }
                }
            }
            .orderInfo-cart {
                margin-left: 110px;
                margin-top: 49px;
                font-size: 14px;
                line-height: 28px;
                height: 237px;
                transition: all .5s;
                overflow: hidden;
                .orderInfo-cartInner {

                    .tr {
                        padding-bottom: 20px;
                    }
                    .label {
                        width: 80px;
                        text-align: left;
                    }
                    .desc {
                        text-align: left;
                    }
                }
  
                &.show {
                    height: 0;
                    margin: 0 0;
                }
            }
        }
        .payMethod {
            height: 270px;
            background-color: #FFFFFF;
            padding: 0 53px;
            .title {
                height: 70px;
                line-height: 70px;
                font-size: 20px;
                color: #333333;
                font-weight: normal;
                border-bottom: 1px solid #e5e5e5;
            }
            .payPlatform {
                margin-top: 21px;
                color: #333333;
                font-weight: normal;
            }
            .plateformList {
                margin-top: 19px;
                padding-top: 13px;
                .item {
                    display: inline-block;
                    width: 188px;
                    height: 64px;
                    line-height: 64px;
                    text-align: center;
                    border: 1px solid #e5e5e5;
                    margin-right: 20px;
                    &:last-child {
                        margin-right: 0px;
                    }
                    .itemImg {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    img {
                        width: 60%;
                        height: 60%;
                    }
                }
            }
        }
    }

    .wechatModal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;
        .back {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: #999999;
            opacity: 0.7;
        }
        .body {
            display: flex;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            z-index: 999;
            .tip {
                width: 296px;
                height: 485px;
                img {
                    width: 100%;
                    height: 100%;
                }
                position: relative;
                top: -20px;
            }
            .code {
                
                .header {
                    width: 370px;
                    height: 60px;
                    padding-left: 18px;
                    padding-right: 18px;
                    box-sizing: border-box;
                    background-color: #e5e5e5;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    icon {
                        width: 13px;
                        height: 13px;
                        img {
                            width:100%;
                            height: 100%;
                        }
                    }
                }
                .content {
                    width:370px;
                    height: 370px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width:60%
                    }
                    background-color: #FFFFFF;
                }
                .footer {
                    width: 370px;
                    height: 60px;
                    text-align: center;
                    background-color: #e5e5e5;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    span {
                        color: #FF6600;
                    }
                }
            }
        }
    }
    .payTip {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 660px;
        height: 140px;
        background-color: #FFFFFF;
        border: 1px solid #e5e5e5;
        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            .payProblem {
                width: 160px;
                height: 40px;
                background-color: #e5e5e5;
                color: #999999;
                text-align: center;
                line-height: 40px;
                margin-right: 15px;
            }
            .confirm {
                width: 160px;
                height: 40px;
                background-color: #FF6600;
                color: #FFFFFF;
                text-align: center;
                line-height: 40px;
            }
        }
    }
}
</style>