<template>
  <div class="product">
    <div class="top">
      <div class="container">
      <!-- left -->
        <div class="left">
          <ul class="clearfix">
            <li class="fl">
              <a href="#">松果出行</a>
            </li>
            <li class="fl"> 
              <a href="#">MIUI</a>
            </li>
            <li class="fl">
              <a href="#">云服务</a>
            </li>
            <li class="fl">
              <a href="#">协议规则</a>
            </li>
          </ul>
        </div>
      <!-- right -->
        <div class="right">
          <a href="#" class="login">登录</a>
          <a href="#" class="register">注册</a>
          <a href="#" class="logout">注销</a>
          <a href="#" class="cart">
            <img src="../../public/imgs/icon-cart.png" alt="">
            购物车(0)
          </a>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

export default {
  name: 'productVue',
  components: {

  }
}
</script>

<style lang="scss">
.product {
  .top {
    width: 1920px;
    height: 39px;
    background: #333333;
    line-height: 39px;
    .container {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      a {
        color: #B0B0B0;
        margin-right: 17px;
      }
      .left {

      }
      .right {
        .cart {
          display: inline-block;
          width: 110px;
          height: 39px;
          line-height: 39px;
          background-color: #666666;
          text-align: center;
          img {
            width: 16px;
            height: 12px;
            vertical-align: -1px;
          }
        }
      }
    }
  }
}
</style>
