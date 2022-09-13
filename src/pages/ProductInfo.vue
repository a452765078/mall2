<template>
  <div class="productInfo">
    <Top></Top>
    <Header></Header>
    <Product-Header></Product-Header>
    <div class="bg1">
      <img src="/imgs/product/product-bg-1.png" alt="">
      <div class="content">
        <h1>小米8</h1>
        <p class="desc">8周年旗舰版</p>
        <p class="detail">
          <span>全球首款双频 GPS</span>
          <span>骁龙845</span>
          <span>AI 变焦双摄</span>
          <span>红外人脸识别</span>
        </p>
        <p class="price">
          <span class="curPrice">￥2599</span>
          <span class="oldPrice"><del>￥2999</del></span>
        </p>
      </div>
    </div>
    <div class="bg2">
      <div class="wrapper">
        <img src="/imgs/product/product-bg-2.png" alt="">
      </div>
    </div>
    <div class="bg3">
      <div class="wrapper">
        <img src="/imgs/product/product-bg-3.png" alt="">
      </div>
    </div>
    <div class="bg4">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img src="/imgs/product/gallery-1.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/product/gallery-2.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/product/gallery-3.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/product/gallery-4.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/product/gallery-5.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/product/gallery-1.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="/imgs/product/gallery-2.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination">
        </div>
      </swiper>
      <p class="content"><span>小米8 变焦双摄拍摄</span></p>
    </div>
    <div class="bg5">
      <div class="title">
        <h1>
          60帧超慢动作摄影
        </h1>
        <h1>
          慢慢回味每一瞬间的精彩
        </h1>
      </div>
      <div class="desc">
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！ </p>
        <p>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
      </div>
      <div class="bgImg" @click="getVideo">
          <div class="imgWrapper">
            <img src="/imgs/product/gallery-1.png" alt="">
          </div>
          <!-- video -->

      </div>

    </div>
    <div class="videoWrapper" :class="{active:isShowVideo}">
      <div class="back"></div>
      <div class="video" :class="{active:isShowVideo}">
        <video src="/imgs/product/video.mp4" controls="controls" ></video>
        <div class="close" @click="closeVideo">
          <img src="/imgs/icon-close.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../components/top.vue';
import Header from '../components/header.vue';
import ProductHeader from '@/components/productHeader.vue';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'productInfoVue',
  components: { 
    Top,
    Header,
    ProductHeader,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions: {
        autoplay:true,
        slidesPerView : 3,
        offsetSlidesAfter : 1,
        pagination:{
          el:'.swiper-pagination',
        },
        paginationAsRange : true,
      },
      isShowVideo: false,
    }
  },  
  mounted() {

  },  
  methods: {
    getVideo() {
      this.isShowVideo = true;
    },
    closeVideo() {
      this.isShowVideo = false;
    }
  }
}
</script>

<style lang="scss">
.productInfo {
  position: relative;
  .addSticky {
    position: fixed;
    top: 0;
  }
  .bg1 {
    width: 100%;
    height: 718px;
    position: relative;
    img {
      width: 100%;
    }
    .content {
      position: absolute;
      left: 50%;
      top: 55px;
      transform: translateX(-50%);
      text-align: center;
      h1 {
        font-size: 80px;
        color: #333333;
      }
      .desc {
        font-size: 24px;
        font-weight: Light;
        color: #333333;
        letter-spacing: 10px;
        margin-top: 13px;
      }
      .detail {
        margin-top: 21px;
        span {
          font-size: 16px;
          color: #333333;
          &::after {
            color: #333333;
            content: '|';
            margin: 0 10px;
            font-size: 10px;
            vertical-align: 1px;
          }
          &:last-child {
            &::after {
              content: '';
            }
          }
        }
      }
      .price {
        margin-top: 21px;
        .curPrice {
          font-size: 38px;
        }
        .oldPrice {
          font-size: 26px;
          margin-left: 11px;
        }
      }
    }
  }
  .bg2 {
    width: 100%;
    height: 480px;
    position: relative;
    .wrapper{
      border: 1px dashed gray;
      width:1226px;
      height: 397px;
      position: absolute;
      top: 38px;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 100%;
      }
    }
  }
  .bg3 {
    .wrapper {
      img {
        width: 100%;
        height: 638px;
      }
    }
  }
  .bg4 {
    width: 100%;
    margin-top: 35px;
    height: 416px;
    img {
      width: 625px;
      height: 356px;
    }
    .swiper-container {
      height: 396px;
      .swiper-pagination {
        width: 190px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        z-index: 99;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translate(-50%);
        .swiper-pagination-bullet {
          border-radius: 20%;
          width: 29.3px;
          height: 3px;
        }
      }
    }
    .content {
      font-size: 18px;
      color: #333333;
      text-align: center;
      font-weight: 400;
    }
  }
  .bg5 {
    width: 100%;
    height: 1044px;
    margin-top: 52px;
    background-color: #070708;
    padding-top: 82px;
    box-sizing: border-box;
    .title {
      h1 {
        font-size: 60px;
        text-align: center;
        width: 686px;
        color: #FFFFFF;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .desc {
      margin-top:47px ;
      margin-bottom: 58px;
      p{
        color: #FFFFFF;
        text-align: center;
        line-height: 26px;
      }
    }

    .bgImg {
      .imgWrapper {
        width: 1226px;
        margin:0 auto;
        img {
          width: 1226px;
          height: 540px;
          cursor: pointer;
        }
      }
 

    }
  }
  .videoWrapper {
    position:fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -9;
    transition: all .3s;
    .back {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #FFFFFF;
      opacity:.8
    }
    .video {
      position: absolute;
      top: -550px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      transition: top .3s;
      video {
        width: 750px;
      }
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
          background-color: #FFFFFF;
        }
      }
      &.active {
        top: 150px;
      }
    }
    &.active {
      z-index: 99;
    }
  }
}
</style>
