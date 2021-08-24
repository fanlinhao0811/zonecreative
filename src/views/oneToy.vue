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
               :class="['grid-item', 'set-bg-portfolio', 'grid-wide']"
               :style="{
                  backgroundImage: `url(https://z1creative.com/upload/${item.cover.filename})`
                }"
               @click="show(item)">
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
            {{ showPottfolio.name }}
          </div>
          <div class="hover-container-wrapper-desc">
            {{ showPottfolio.description }}
          </div>
          <div class="hover-container-wrapper-date">
            {{ showPottfolio.tags[0] }}
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
      showHover: false,
      showPottfolio: {}
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    this.$api.getPortfolio(
      {
        category: 'oneToy'
      }
    ).then(res => {
      this.tableData = res.data;
      setTimeout(() => {
        this.portfolio_item_size()
      }, 0)
    })
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
    show (item) {
      this.showPottfolio = item;
      this.showHover = true;
    },
    closeHover () {
      this.showHover = false;
    },
  }
}
</script>
