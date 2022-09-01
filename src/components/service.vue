<template>
  <div class="servie">
    <div class="container">
        <a href="" class="link">
            <img src="../../public/imgs/icon-setting.png" alt="">
            预约维修服务
        </a>
        <a href="" class="link">
            <img src="../../public/imgs/icon-7day.png" alt="">
            7天无理由退货
        </a>
        <a href="" class="link">
            <img src="../../public/imgs/icon-15day.png" alt="">
            15天免费换货
        </a>
        <a href="" class="link">
            <img src="../../public/imgs/icon-cart.png" alt="">
            满150元包邮
        </a>
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
.servie {
    .container {
        display: flex;
        height: 84px;
        align-items: center;
        .link {
            display: block;
            flex-grow: 1;
            text-align: center;
            position: relative;
            color: #666666;
            font-size: 16px;
            img {
                width: 20px;
                height: 20px;
                vertical-align: -2px;
            }
            &::after {
                content: '|';
                position: absolute;
                right: 0;
                color: #E5E5E5;
            }
            &:last-child {
                &::after {
                    content: '';
                }
            }
        }
    }
}
</style>
