<style lang="less" scoped>
.page-header-section {
  background-image: url("../assets/header-bg-2.jpg");
}
</style>

<template>
  <div class="contact">
    <section class="page-header-section set-bg">
      <div class="container">
        <h1 class="header-title">Contact<span>.</span></h1>
      </div>
    </section>

    <section class="page-section pt100">
      <div class="container pb100">
        <div class="section-title pt-5">
          <h1>Get in touch</h1>
        </div>
        <div class="row">
          <div class="col-lg-3 contact-info mb-5 mb-lg-0">
            <p>Address: 上海市普陀区丹巴路1218号红星世贸大厦16F</p>
            <!-- <p>Phone: +86 13661797576</p> -->
            <p>Email: hello@z1creative.com</p>
            <!-- <div class="cf-social">
						<a href="#"><i class="fa fa-google-plus"></i></a>
						<a href="#"><i class="fa fa-pinterest"></i></a>
						<a href="#"><i class="fa fa-facebook"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
					</div> -->
          </div>
          <div class="col-lg-9">
            <form class="contact-form">
              <input type="text"
                     placeholder="Enter your name">
              <input type="text"
                     placeholder="Enter your email address">
              <textarea placeholder="Message ..."></textarea>
              <button class="site-btn sb-dark">Send</button>
            </form>
          </div>
        </div>
      </div>
      <!-- <div class="map-area" id="map-canvas"></div> -->
    </section>

  </div>
</template>
<script>

// import $ from 'jquery'

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
    // $('.set-bg').each(function () {
    //   let bg = $(this).data('setbg');
    //   $(this).css('background-image', 'url(' + bg + ')');
    // });
  },
  methods: {
  }
}
</script>
