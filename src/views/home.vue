<template>
  <div class="home">
    <!-- Page Preloder -->
    <!-- <div id="preloder">
      <div class="loader"></div>
    </div> -->

    <!-- Header section start -->
    <header class="header-area">
      <a href="home.html"
         class="logo-area">
        <img src="@/assets/logo.png"
             alt="">
      </a>
      <div class="nav-switch">
        <i class="fa fa-bars"></i>
      </div>
      <div class="phone-number"><a href="contact.html">GET IN TOUCH</a></div>
      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="home.html">Home</a></li>
          <li><a href="about.html">About us</a></li>
          <li><a href="service.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="contact.html">ONETOY</a></li>
        </ul>
      </nav>
    </header>
    <!-- Header section end -->

    <!-- Hero section start -->
    <section class="hero-section">
      <!-- left social link ber -->
      <div class="left-bar">
        <div class="left-bar-content">
          <!-- <div class="social-links">
					<a href="#"><i class="fa fa-pinterest"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
				</div> -->
        </div>
      </div>
      <!-- hero slider area -->
      <div class="hero-slider">
        <div class="hero-slide-item set-bg">
          <div class="slide-inner">
            <div class="slide-content">
              <h2>Dgital <br>Marketing & <br> Design Agency</h2>
              <a href="#"
                 class="site-btn sb-light">See Project</a>
            </div>
          </div>
        </div>
        <div class="hero-slide-item set-bg">
          <div class="slide-inner">
            <div class="slide-content">
              <h2>Dgital <br>Marketing & <br> Design Agency</h2>
              <a href="#"
                 class="site-btn sb-light">See Project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-num-holder"
           id="snh-1"></div>
      <div class="hero-right-text">ZONECREATIVE</div>
    </section>
    <!-- Hero section end -->

    <!-- Intro section start -->
    <section class="intro-section pt100 pb50">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 intro-text mb-5 mb-lg-0">
            <h2 class="sp-title">Be Creative, <br /> Be Good to <span>Work</span></h2>
            <p>
              用认知科学驱动的品牌战略咨询，基于认知科学创建品牌方法论，通过定位、符号创建、品牌营销与传播策略，协助企业创建品牌心智语汇。<br />
              业务涉及：战略品牌定位咨询、广告、公关与活动、数字营销和社会化营销、品牌识别设计、IP形象创意设计与孵化等。<br />
              上海之万已成功服务众多创新型独角兽企业、和资产规模数千亿的大型企业集团。我们与Top100中的20+客户建立了合作关系，为奔驰、万科、汇丰、阿里巴巴等集团及品牌提供品牌咨询与设计服务，帮助更多企业实现其品牌雄心和商业抱负、迈向更大规模。
            </p>
            <a href="#"
               class="site-btn sb-dark">See Project</a>
          </div>
          <div class="col-lg-5 pt-4">
            <img src="@/assets/intro.png"
                 alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- Intro section end -->

  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
