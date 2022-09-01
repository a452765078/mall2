<template>
    <div class="bottom">
        <img src="../../public/imgs/logo-footer.png" alt="">
        <a href="#" class="name">小米商城</a>
        <div class="links">
            <a href="#">河畔一角主页</a>
            <a href="#">Vue全栈课程</a>
            <a href="#">React全家桶课程</a>
            <a href="#">微信支付专项课程(H5+小程序+Node+Mongo)</a>
        </div>
        <div class="copyright">
            Copynight &copy; 2019 <a href="javascript:;">mi.51purse.com</a>All rights Reserved
        </div>
    </div>
</template>
<script>
export default {
    name: 'bottomVue',
    components: {

    }
}
</script>
<style lang="scss">
.bottom {
    height: 234px;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top: 46px;
        width: 53px;
        height: 36px;
    }
    .name {
        color: #999999;
        font-size: 16px;
        margin-top: 13px;
    }
    .links {
        margin-top: 31px;
        a {
            color: #999999;
            font-size: 16px;
        }
    }
    .copyright {
        margin-top: 13px;
        color: #999999;
        a {
            color: #FF6600;
            font-size: 16px;
        }
    }
}
</style>