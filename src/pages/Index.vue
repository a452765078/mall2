<template>
  <div class="index">
    <Top></Top>
    <Header></Header>
    <Tab></Tab>
    <Ads></Ads>
    <div class="banner">
      <div class="container">
        <a href="#">
          <img src="../../public/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <div class="product">
      <div class="container">
        <h3>手机</h3>
        <div class="productWrapper">
          <div class="ads">
            <img src="../../public/imgs/mix-alpha.jpg" alt="">
          </div>
          <div class="productList clearfix">
            <a :href="'#/productInfo/'+item.id" class="productItem fl" v-for="item in productList" :key="item.id">
              <div class="wrapper">

                <div class="type">新品</div>
                <img :src="item.img" alt="">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.detail}}</div>
                <div class="price">
                  <img src="/imgs/icon-cart-hover.png" alt="" @click="addCart(item.id)">
                  <span>{{item.price}}</span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
    <Service></Service>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '../components/top.vue';
import Header from '../components/header.vue';
import Tab from '../components/tab.vue';
import Ads from '../components/ads.vue';
import Service from '../components/service.vue';
import Bottom from '../components/bottom.vue';
export default {
  name: 'productVue',
  components: {
      Top,
      Header,
      Tab,
      Ads,
      Service,
      Bottom
  },
  data() {
    return {
      productList:[
            {
                id: '42',
                remark:'新品',
                name: '小米1 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '43',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '44',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '45',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '46',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '47',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '48',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
            {
                id: '49',
                remark:'新品',
                name: '小米9 6GB+128GB',
                detail: '骁龙855，索尼4800万超广角微距',
                price: '2999元',
                img: '/imgs/item-box-3.jpg'
            },
        ]
    }
  },
  methods: {
    addCart(id) {
      this.axios.post('/carts',{
        productId:id,
        selected: true
      }).then((res)=>{
        console.log(res.cartTotalQuantity)
        alert("添加购物车成功")
        this.$store.dispatch("saveCartcount",res.cartTotalQuantity)
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss">
.index {
  .banner {
    .container {
      height: 130px;
      a {
        display: block;
        margin-top: 14px;
        width: 1226px;
        height: 130px;
        img {
          width: 1226px;
          height: 130px;
        }
      }
    }
  }
  .product {
    background-color: #F5F5F5;
    height: 740px;
    margin-top: 50px;
    .container {
      h3 {
        height: 71px;
        line-height: 71px;
      }
      .productWrapper {
        display: flex;
        .ads {
          width: 224px;
          height: 619px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .productList {
          .productItem {
            display: block;
            width: 236px;
            height: 302px;
            background: #FFFFFF;
            margin-bottom: 14px;
            margin-left: 14px;
            .wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              .type {
                  color: #FFFFFF;
                  width: 67px;
                  height: 24px;
                  background: #7ECF68;
                  text-align: center;
                  line-height: 24px;
              }
              img {
                width: 110px;
                height: 115px;
                margin-top: 18px;
              }
              .name {
                color: #333333;
                font-size: 14px;
                margin-top: 14px;
              }
              .desc {
                color: #999999;
                font-size: 12px;
                margin-top: 14px;
              }
              .price {
                img {
                  width: 20px;
                  height: 20px;
                  vertical-align: center;
                }
                span {
                  margin-left: 8px;
                  color: #F20A0A;
                  font-size: 14px;
                  margin-top: 18px;
                }
                
              }
            }
          }
        }
      }
    }
  }
}
</style>
