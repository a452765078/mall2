<template>
  <div class="ads">
    <div class="container">
        <div class="wrapper clearfix">
            <a href="#" class="fl">
                <img src="../../public/imgs/ads/ads-1.png" alt="">
            </a>
            <a href="#" class="fl">
                <img src="../../public/imgs/ads/ads-2.png" alt="">
            </a>
            <a href="#" class="fl">
                <img src="../../public/imgs/ads/ads-3.png" alt="">
            </a>
            <a href="#" class="fl">
                <img src="../../public/imgs/ads/ads-1.png" alt="">
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'adsVue',
  components: {

  }
}
</script>

<style lang="scss">
.ads {
    .container {
        height: 167px;
        .wrapper {
            margin-top: 14px;
            a {
                display: block;
                width: 296px;
                height: 167px;
                margin-left: 14px;
                &:first-child {
                    margin-left: 0;
                }
                img {
                    width: 296px;
                    height: 167px;
                }
            }
        }
    }
}
</style>
