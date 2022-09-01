<template>
<div class="login">
    <div class="header">
        <div class="container">
            <div class="logo">
                <img src="/imgs/logo-mi.png" alt="">
            </div>
            <div class="content">
                <h2>小米商城</h2>
                <p>让每个人都能享受科技的乐趣</p>
            </div>
        </div>
    </div>
    <div class="body">
        <div class="container">
            <div class="loginForm">
                <div class="title">
                    <span class="selected">账号登录</span>
                    <span class="split">|</span>
                    <span class="codeScan">扫码登录</span>
                </div>
                <div class="uname input">
                    <input type="text" placeholder="邮箱/手机号码/小米ID"  v-model="username">
                </div>
                <div class="pwd input">
                    <input type="password" placeholder="密码"  v-model="password">
                </div>
                <div class="submit" @click="submit">
                    登录
                </div>
                <div class="links">
                    <div class="left">
                        <a href="#">手机短信登录/注册</a>
                    </div>
                    <div class="right">
                        <a href="#" @click="register">立即注册</a>
                        <span>|</span>
                        <a href="#">忘记密码？</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'loginVue',
  components: {

  },
  data() {
    return {
        username:'',
        password:''
    }
  },
  methods: {
    submit() {
        let {username,password} = this;
        this.axios.post('/user/login',{
            username,
            password
        }).then((res)=>{
            this.$cookie.set("userId",res.id,{expires:'session'})
            this.$store.dispatch("saveUsername",res.username)
            this.$router.push("/index")
        }).catch((err)=>{
            console.log(err)
        })
    },
    register() {
        let {username,password} = this;
         this.axios.post('/user/register',{
            username,
            password,
            email:'yzt@123.com'
        }).then((res)=>{
            console.log(res)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
    .header {
        width: 100%;
        .container {
            height: 112px;
            display: flex;
            align-items: center;
            background: #FFFFFF;
            .logo {
                width: 53px;
                height: 52px;
                img {
                    width: 100%;
                }
            }
            .content {
                margin-left: 18px;
                text-align: left;
                h2 {
                    font-size: 33px;
                }
                p {
                    font-size: 10px;
                    color: #666666;
                }
            }
        }
    }
    .body {
        width: 100%;
        height: 558px;
        background: url('/public/imgs/login-bg.jpg') no-repeat center;
        background-size: cover;
        .container {
            position: relative;
            .loginForm {
                margin-top: 27px;
                width: 348px;
                height: 510px;
                background: #FFFFFF;
                position: absolute;
                right: 0;
                padding: 0 31px;
                .title {
                    margin-top: 30px;
                    display: flex;
                    font-size: 22px;
                    text-align: center;
                    padding: 0 42px;
                    span {
                        color: #666666;
                        &.selected {
                            color: #FF6600;
                        }
                    }
                    .split {
                        color: #D7D7D7;
                        margin-left: 35px;
                    }
                    .codeScan {
                        margin-left: 35px;
                    }
                }
                .input {
                    width: 348px;
                    height: 50px;
                    border: 1px solid #E5E5E5;
                    line-height: 50px;
                }
                .uname {
                    margin-top: 49px;
                    input {
                        border: none;
                        background: none;
                        padding-left: 18px;
                        font-size: 14px;
                        color: #999999;
                    }
                }
                .pwd {
                    margin-top: 20px;
                    input {
                        border: none;
                        background: none;
                        padding-left: 18px;
                        font-size: 14px;
                        color: #999999;
                    }
                }
                .submit {
                    color: #FFFFFF;
                    text-align: center;
                    margin-top: 30px;
                    width: 348px;
                    height: 50px;
                    line-height: 50px;
                    background: #FF6600;
                    cursor: pointer;
                }
                .links {
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    .left {
                        a {
                            color:#FF6600;
                        }
                    }
                    .right {
                        a {
                            color: #999999;
                        }
                        span {
                            color: #999999;
                            margin-left: 7px;
                            margin-right: 7px;
                        }
                    }
                }
            }
        }

    }
}
</style>
