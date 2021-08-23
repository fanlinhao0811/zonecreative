<style lang="less" scoped>
.page-header-section {
  background-image: url("../assets/header-bg.jpg");
}
li.btn-active {
  background: #baff00;
  color: #222222;
}
.hover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1042;
  overflow: hidden;
  background: rgba(11, 11, 11, 0.8);
  &-container {
    width: 772px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1045;
    &-close {
      text-align: right;
      cursor: pointer;
      font-weight: bolder;
      color: #fff;
    }
    &-main {
      width: 772px;
      height: 514px;
      background: #ccc;
    }
    &-wrapper {
      width: 100%;
      height: 260px;
      background: #fff;
      border-radius: 0px;
      padding: 16px 32px;
      border: 0px;
      &-title {
        font-size: 24px;
        /* margin-bottom: 50px; */
        color: #222222;
        margin: 0;
        font-weight: 700;
      }
      &-desc {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        font-size: 15px;
        color: #727272;
        line-height: 2;
        margin: 16px 0;
      }
      &-date {
        font-size: 12px;
        font-weight: 700;
        color: #222222;
        display: inline-block;
        padding: 2px 0;
      }
    }
  }
}
</style>

<template>
  <div class="portfolio">
    <section class="page-header-section">
      <div class="container">
        <h1 class="header-title">Portfolio<span>.</span></h1>
      </div>
    </section>

    <div class="page-section spad">
      <div class="container">
        <ul class="portfolio-filter">
          <li v-for="(item, index) in categoryList"
              :key="index"
              :class="{'filter': true, 'btn-active': currentCategory === item.id}"
              :id="item.id"
              @click="filterPortfolio(item)">{{ item.name }}</li>
        </ul>
      </div>

      <div class="portfolio-warp spad">
        <div id="portfolio">
          <div class="grid-sizer"></div>
          <div v-for="(item, index) in tableData"
               :key="index"
               :class="['grid-item', 'set-bg-portfolio', item.grid_size]"
               :style="{
                  'background-image': 'url(/api/upload/' + item.images[0].filename + ')'
                }">
          </div>
        </div>
      </div>
    </div>

    <div class="hover"
         v-if="showHover">
      <div class="hover-container">
        <div class="hover-container-close"
             @click="closeHover">
          X
        </div>
        <div class="hover-container-main"></div>
        <div class="hover-container-wrapper">
          <div class="hover-container-wrapper-title">
            赛博朋克系列潮流玩具雕像
          </div>
          <div class="hover-container-wrapper-desc">
            赛博朋克描绘的是未来科技也许将带来的毁灭性一面：社会腐朽，贫富差距拉大，社会秩序崩溃或濒临崩溃，末日般的破败…它的出现来自于人们对科学发展方向和成果未知性的恐惧，而这种恐惧也是最容易为人所认同的。作为本系列的序章，潮玩Hancock与她的生化蛇加入了控制论与电脑生化/脑机的设计元素，表达勇于挑战规章制度的热血精神。
          </div>
          <div class="hover-container-wrapper-date">
            潮玩盲盒手办文创产品
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
// import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
  name: 'oneToy',
  data () {
    return {
      tableData: [],
      currentCategory: 'oneToy',
      categoryList: [
        { id: 'branding', name: "VI System" },
        { id: 'events', name: "Events" },
        { id: 'ui', name: "UI/UX" },
        { id: 'packing', name: "Packing" },
        { id: 'advertisement', name: "Advertisement" },
        { id: 'oneToy', name: "One Toy" }
      ],
      showHover: false
    }
  },
  computed: {
  },
  created () {
    this.$api.getPortfolio(
      {
        category: 'oneToy'
      }
    ).then(res => {
      this.tableData = res.data;
    })
  },
  mounted () {
    this.portfolio_item_size()
  },
  methods: {
    filterPortfolio (item) {
      this.currentCategory = item.id;
    },
    portfolio_item_size () {
      $('#portfolio').find('.grid-item').each(function () {
        var pi_height1 = $(this).outerWidth(true),
          pi_height2 = pi_height1 / 2;

        if ($(this).hasClass('grid-long') && $(window).innerWidth() > 991) {
          $(this).css('height', pi_height2);
        } else {
          $(this).css('height', Math.abs(pi_height1));
        }
      });
    },
    closeHover () {
      this.showHover = false;
    },
  }
}
</script>
