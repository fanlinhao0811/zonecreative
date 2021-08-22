<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  // background: rgba(15, 17, 24, 0.5);
  &-body {
    position: relative;
    // min-width: 996px;
    // max-width: 1920px;
    margin: 0 auto;
    &-wrapper-header {
      width: 100%;
      height: 100px;
      background: rgba(7, 9, 17, 0.6);
      position: fixed;
      top: 0px;
      z-index: 9;
    }
  }
}
</style>

<template>
  <div class="main">
    <div class="main-body">
      <header class="header-area">
        <a href="index.html"
           class="logo-area">
          <img src="../assets/img/logo.png"
               alt="">
        </a>
        <div class="nav-switch">
          <span class="fa fa-bars">
            <svg t="1628993659128"
                 class="icon"
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="1647"
                 width="26"
                 height="30">
              <path d="M936.19430083 441.30094987c20.7383885 0 37.70616053 7.06990501 50.90331611 21.20971504S1006.89335097 493.14692043 1006.89335097 512s-7.06990501 35.34952507-21.20971503 49.48933509-30.63625552 21.20971504-49.48933511 21.20971504H87.80569917c-18.85307957 0-35.34952507-7.06990501-49.48933511-21.20971504S17.10664903 530.85307957 17.10664903 512s6.59857847-35.34952507 19.79573403-49.48933509S67.06731066 441.30094987 87.80569917 441.30094987h848.38860166zM87.80569917 299.90284958c-18.85307957 0-35.34952507-7.06990501-49.48933511-21.20971504S17.10664903 248.05687901 17.10664903 229.20379943s6.59857847-35.34952507 19.79573403-49.4893351S67.06731066 158.5047493 87.80569917 158.5047493h848.38860166c20.7383885 0 37.70616053 7.06990501 50.90331611 21.20971503S1006.89335097 210.35071986 1006.89335097 229.20379943s-7.06990501 35.34952507-21.20971503 49.48933511-30.63625552 21.20971504-49.48933511 21.20971504H87.80569917z m848.38860166 424.19430084c20.7383885 0 37.70616053 7.06990501 50.90331611 21.20971504S1006.89335097 775.94312099 1006.89335097 794.79620057s-7.06990501 35.34952507-21.20971503 49.4893351-30.63625552 21.20971504-49.48933511 21.20971503H87.80569917c-18.85307957 0-35.34952507-7.06990501-49.48933511-21.20971503S17.10664903 813.64928014 17.10664903 794.79620057s6.59857847-35.34952507 19.79573403-49.48933511S67.06731066 724.09715042 87.80569917 724.09715042h848.38860166z"
                    fill="#3b3b3b"
                    p-id="1648"></path>
            </svg>
          </span>
          <!-- <i class="fa fa-bars"></i> -->
        </div>
        <div class="phone-number">
          <a href="javascript:void(0);"
             @click="routerTo('contact')">GET IN TOUCH</a>
        </div>
        <nav class="nav-menu">
          <ul>
            <li>
              <a href="javascript:void(0);"
                 @click="routerTo('home')">
                Home
              </a>
            </li>
            <li class="active">
              <a href="javascript:void(0);"
                 @click="routerTo('about')">
                About us
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                 @click="routerTo('service')">
                Services
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                 @click="routerTo('portfolio')">
                Portfolio
              </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                 @click="routerTo('portfolio')">
                ONETOY
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <router-view />
      <footer class="footer-section">
        <div class="footer-social">
          <div class="social-links">
            <a href="javascript:void(0);"
               @click="routerTo('contact')">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-6">
              <div class="row">
                <div class="col-md-3">
                  <div class="footer-item">
                    <ul>
                      <li>
                        <a href="javascript:void(0);"
                           @click="routerTo('home')">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                           @click="routerTo('about')">
                          About us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="footer-item">
                    <ul>
                      <li>
                        <a href="javascript:void(0);"
                           @click="routerTo('service')">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);"
                           @click="routerTo('portfolio')">
                          Portfolio
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="footer-item">
                    <ul>
                      <li><a href="javascript:void(0);"
                           @click="routerTo('home')">Privacy</a></li>
                      <li><a href="javascript:void(0);"
                           @click="routerTo('contact')">Contact us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright">
          Copyright &copy;
          {{ year }}
          All rights reserved. <br>
          The function of design is letting design function. @Z·ONE Studio
        </div>
      </footer>
    </div>
  </div>
</template>
<script>

import $ from 'jquery'
import { constantRouterMap } from '../router/index'

export default {
  name: 'home',
  data () {
    return {
      menu: constantRouterMap[0].children.filter(item => item.showMenu),
      year: ''
    }
  },
  components: {
  },
  computed: {
  },
  created () {
    this.year = new Date().getFullYear();
  },
  mounted () {
    $('.nav-switch').on('click', function (event) {
      $('.nav-menu').slideToggle(400);
      event.preventDefault();
    });
  },
  methods: {
    routerTo (router) {
      this.$router.push({
        name: router
      });
    }
  }
}
</script>
