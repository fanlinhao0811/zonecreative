<style lang="less" scoped>
</style>

<template>
  <div class="welcome">
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
        <div class="hero-slide-item set-bg"
             data-setbg="../assets/img/bg.jpg">
          <div class="slide-inner">
            <div class="slide-content">
              <h2>Dgital <br>Marketing & <br> Design Agency</h2>
              <a href="portfolio.html"
                 class="site-btn sb-light">See Project</a>
            </div>
          </div>
        </div>
        <div class="hero-slide-item set-bg"
             data-setbg="../assets/img/bg.jpg">
          <div class="slide-inner">
            <div class="slide-content">
              <h2>Dgital <br>Marketing & <br> Design Agency</h2>
              <a href="portfolio.html"
                 class="site-btn sb-light">See Project</a>
            </div>
          </div>
        </div>
        <div class="hero-slide-item set-bg"
             data-setbg="../assets/img/bg.jpg">
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

  </div>
</template>
<script>

import $ from 'jquery'

export default {
  name: 'welcome',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    $('.set-bg').each(function () {
      let bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    })
  },
  methods: {
  }
}
</script>
