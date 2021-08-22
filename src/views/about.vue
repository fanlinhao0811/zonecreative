<style lang="less" scoped>
.page-header-section {
  background-image: url("../assets/header-bg.jpg");
}
// .testimonials-image-box {
//   background-image: url("../assets/cta-1.png");
// }
</style>

<template>
  <div class="about">
    <section class="page-header-section">
      <div class="container">
        <h1 class="header-title">About us<span>.</span></h1>
      </div>
    </section>

    <section class="intro-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 intro-text">
            <h1>Be Creative <br /> Be Good to <span>Work</span></h1>
            <div class="row">
              <p class="about-text">
                用认知科学驱动的品牌战略咨询，基于认知科学创建品牌方法论，通过定位、符号创建、品牌营销与传播策略，协助企业创建品牌心智语汇。<br />
                业务涉及：战略品牌定位咨询、广告、公关与活动、数字营销和社会化营销、品牌识别设计、IP形象创意设计与孵化等。<br />
                上海之万已成功服务众多创新型独角兽企业、和资产规模数千亿的大型企业集团。我们与Top100中的20+客户建立了合作关系，为万科、保利、阿里巴巴等集团及品牌提供品牌策略咨询与设计服务，帮助更多企业实现其品牌雄心和商业抱负、迈向更大规模。
              </p>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 pt-4">
            <img src="../assets/about.jpg"
                 alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials-section spad">
      <div class="testimonials-image-box"
           :style="{backgroundImage: `url(${swiperBg})` 
      }"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
            <h1>Select <span>projects</span></h1>
            <div class="qut">“</div>
            <div class="testimonials-slider swiper-container"
                 id="test-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide ts-item">
                  <p>
                    共情营销，是创造品牌红利的重要手段。有幸承接顺德金科开盘活动策划与设计，欲成一家人，先讲一家话，将「博大金深」作为顺德人与金科的共同信仰，树立贯穿全年传播的格局。致敬顺德截拳道法、谱写《三字经》的宋代顺德人区士衡、与家电之都的城市地标文化，策划了「见博翠
                    宴天下」的开春宴，进入项目价值落地，顺势预告开放。大胆启用带有东方文化色彩的竹节作为视觉符号，结合特色亲水建筑景观，贯穿博采众长的人居价值。
                  </p>
                  <h4>金科博翠天下</h4>
                </div>

                <div class="swiper-slide ts-item">
                  <p>
                    ESG（环境、社会和公司治理）的发展速度之快可谓前所未有，目前全球超过四分之一的专业管理资产都在采用ESG投资策略。如何抓住碳中和目标下ESG投资的机遇？2021年6月19日，汇丰以线上虚拟直播的方式，在汇丰直播间与观众共同探讨ESG投资的未来。
                  </p>
                  <h4>汇丰ESG投资论坛</h4>
                </div>

                <div class="swiper-slide ts-item">
                  <p>
                    Alpha投资峰会聚集最大的投资者社群，全方位地对话经济学、科学技术和创新等主题，研讨全球投资机会和组合投资策略。2018峰会在上海中欧国际商学院举办，荣邀盛松成、洪灏、付鹏、津上俊哉等20多名重量级嘉宾出席，超过500位与会者出席，活动进一步扩大影响力，提升品牌附加值。
                  </p>
                  <h4>Alpha Summit投资峰会</h4>
                </div>
              </div>

            </div>

            <div class="slide-num-holder test-slider"
                 id="snh-2">
              <span>{{ '0' + currectPage}} / </span>03
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="promo-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 promo-text">
            <h1>In need of a <span>creative</span> idea?</h1>
            <p>
              We work closely with our clients to deliver the best possible solutions for their needs.
            </p>
          </div>
          <div class="col-lg-3 text-lg-right">
            <a href="javascript:void(0);"
               @click="routerTo('contact')"
               class="site-btn sb-dark mt-4">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
  name: 'about',
  data () {
    return {
      swiper: null,
      currectPage: '1'
    }
  },
  computed: {
    swiperBg () {
      return require('@/assets/cta-' + this.currectPage + '.png')
    }
  },
  created () {
  },
  mounted () {
    this.swiper = new Swiper('.swiper-container', {
      mousewheel: true,
      keyboard: true,
      on: {
        'slideChange': () => {
          this.currectPage = this.swiper.activeIndex + 1;
        }
      },
    });
  },
  methods: {
  }
}
</script>
