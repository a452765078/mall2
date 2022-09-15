<template>
    <div class="cartHeader">
        <div class="container">
            <div class="logo">
                <img src="../../public/imgs/logo-mi.png" alt="">
            </div>
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="desc">
                <slot name="desc"></slot>
            </div>
            <div class="username">
                {{username}}
            </div>
        </div>
    </div>
    </template>
    <script>
    export default {
        name: 'cartHeader',
        props: {
            title: {
                type:String,
                default: '默认标题'
            },
            username: {
                type:String,
                default:'此处为用户名'
            }
        }
    }
    </script>
    <style lang="scss">
    .cartHeader {
        .container {
            height: 112px;
            background: #FFFFFF;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #E5E5E5;
            position: relative;
            .logo {
                width: 55px;
                height: 55px;
                img {
                    width: 55px;
                    height: 55px;
                }
            }
            .title {
                margin-left: 54px;
            }
            .desc {
                margin-left: 17px;
            }
            .username {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                font-size: 16px;
                color: #666666;
            }
        }
    }
    </style>