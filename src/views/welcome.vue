<style lang="less" scoped>
.cta-image-box {
  background-image: url("../assets/cta-img.jpg");
}
.hero-slide-item {
  background-image: url("../assets/bg.jpg");
}
li.btn-active {
  background: #baff00;
  color: #222222;
}
.slide-content {
  opacity: 1;
}
.swiper-logo {
  overflow: hidden;
}
</style>

<template>
  <div class="welcome">
    <section class="hero-section">
      <div class="left-bar">
        <div class="left-bar-content">
        </div>
      </div>
      <div class="hero-slider swiper-container">
        <div class="swiper-wrapper service-slider">
          <div class="swiper-slide hero-slide-item">
            <div class="slide-inner">
              <div class="slide-content">
                <h2>Dgital <br>Marketing & <br> Design Agency</h2>
                <a href="javascript:void(0);"
                   class="site-btn sb-light">See Project</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide hero-slide-item">
            <div class="slide-inner">
              <div class="slide-content">
                <h2>Dgital <br>Marketing & <br> Design Agency</h2>
                <a href="javascript:void(0);"
                   class="site-btn sb-light">See Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-num-holder">
        <span>{{ '0' + currectPage}} / </span>02
      </div>
      <div class="hero-right-text">ZONECREATIVE</div>
    </section>

    <section class="intro-section pt100 pb50">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 intro-text mb-5 mb-lg-0">
            <h2 class="sp-title">
              Make the Brand Successful<br /> Build a Successful <span>Brand</span>
            </h2>
            <p>
              To provide strategic planning and creative design for enterprises and brands as the core of the overall
              solution and corresponding implementation of operation services. We use our knowledge and experience to
              create brand value for customers, and look forward to building our own brand through continuous
              self-learning and optimization.
              <br />
              One-stop service, cooperate with customers deeply, provide branding、event/pr、digital marketing and IP design
              service.
              <br />
              <br />
              我们为客户提供品牌管理及推广所需，基于创意、策划、设计为核心的项目执行服务。用所学与经验为客户创造品牌价值，并期待通过自主学习打造自有品牌。
              <br />
              我们的业务涉及：品牌形象设计、活动策划、数字营销和IP形象设计等。我们与世界Top100中的20+品牌建立了合作关系，为奔驰、万科、汇丰、阿里巴巴等集团及品牌提供策划与设计服务。
            </p>
            <a href="portfolio.html"
               class="site-btn sb-dark">See Project</a>
          </div>
          <div class="col-lg-4 pt-4">
            <img src="../assets/intro.png"
                 alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section pt100 pb50">
      <div class="cta-image-box"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
            <h2 class="sp-title">Get into One <span>Toy</span> <br />
              潮流玩具
            </h2>
            <p>
              玩出玩具的温度——我们所做的一切都是围绕着“立体维度的意义”而展开的。<br />
              One Toy致力于打造当下潮流的艺术雕像和潮玩模型，将富有思考和艺术力的形象突破二维局限深度传达给玩家，以品牌形象周边、原创设计孵化、 生产技术制造、多元化互动社区为品牌壁垒，打造持续发展的IP衍生品生态体系。
            </p>
            <a href="javascript:void(0);"
               class="site-btn sb-light">See Project</a>
            <div class="cta-icons">
              <div class="cta-img-icon">
                <!-- <img src="img/icon/light/1.png" alt=""> -->
              </div>
              <div class="cta-img-icon">
                <!-- <img src="img/icon/light/2.png" alt=""> -->
              </div>
              <div class="cta-img-icon">
                <!-- <img src="img/icon/color/3.png" alt=""> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="milestones-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="milestone">
              <h2>11</h2>
              <p>Years <br>of <br>Experience</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="milestone">
              <h2>162</h2>
              <p>Projects <br>Taken</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="milestone">
              <h2>35</h2>
              <p>Major <br>Clients</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="milestone">
              <h2>8</h2>
              <p>Awards <br>Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="projects-section pb50">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="section-title">
              <h1>Projects</h1>
            </div>
          </div>
          <div class="col-lg-9">
            <ul class="projects-filter-nav">
              <li v-for="(item, index) in categoryList"
                  :key="index"
                  :class="{'btn-filter': true, 'btn-active': currentCategory === item.id}"
                  :id="item.id"
                  @click="filterPortfolio(item)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="projects-carousel"
           class="projects-slider swiper-container-pro">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(item, index) in tableDataCopy"
               :key="index">
            <div class="single-project"
                 :style="{backgroundImage: `url(https://z1creative.com/upload/${item.cover2.filename})`}">
              <div class="project-content project-content-hover">
                <h2>{{ item.name }}</h2>
                <p>{{ item.tags[0] }}</p>
                <a href="#"
                   class="seemore">See Project </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="client-section spad">
      <div class="container">
        <div id="client-carousel"
             class="client-slider swiper-logo">
          <div class="swiper-wrapper">
            <div v-for="item in 14"
                 :key="item"
                 class="swiper-slide single-brand">
              <a href="javascript:void(0);">
                <img :src="require('../assets/clients/clients' + item + '.png')"
                     alt="">
              </a>
            </div>
            <div class="swiper-slide single-brand">
              <a href="javascript:void(0);">
                <img src="../assets/clients/clients2.png"
                     alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
  name: 'welcome',
  data () {
    return {
      swiper: null,
      currectPage: '1',
      currentCategory: 'branding',
      categoryList: [
        { id: 'branding', name: "VI System" },
        { id: 'events', name: "Events" },
        { id: 'ui', name: "UI/UX" },
        { id: 'packing', name: "Packing" },
        { id: 'advertisement', name: "Advertisement" }
      ],
      tableData: []
    }
  },
  computed: {
    tableDataCopy () {
      return this.tableData.filter(item => Object.prototype.hasOwnProperty.call(item.cover2, 'filename'))
    }
  },
  created () {
  },
  mounted () {
    this.$api.getPortfolio(
      {
        category: 'branding'
      }
    ).then(res => {
      this.tableData = res.data;
      this.$nextTick(() => {
        new Swiper('.swiper-container-pro', {
          slidesPerView: 4,
          spaceBetween: 20,
        })
      })
    })
    this.swiper = new Swiper('.swiper-container', {
      on: {
        'slideChange': () => {
          this.currectPage = this.swiper.activeIndex + 1;
        }
      },
    });
    new Swiper('.swiper-logo', {
      loop: true,
      autoplay: {
        delay: 2000,
      },
      slidesPerView: 5,
      spaceBetween: 20
    });

  },
  methods: {
    filterPortfolio (item) {
      this.currentCategory = item.id;
      this.$api.getPortfolio(
        {
          category: this.currentCategory
        }
      ).then(res => {
        this.tableData = res.data;
      })
    },
  }
}
</script>
