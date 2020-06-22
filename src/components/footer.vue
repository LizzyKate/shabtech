<template>
<div class="mt-5 foot" id="contact">
  <div class=" gap">
    <div class="flex-row bd-highlight mb-3 justify-content-between change">
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-column bd-highlight">
          <div class="p-2 bd-highlight">
            <div class="bless">
              <img src="/img/Group 444.svg" class="w-100" alt />
            </div>
            <p
              class="ment w-50 mt-3"
            >We are an innovative Wordpress development company, driven by a strong workforce and solutions providing mindset.</p>
          </div>
          <div class="p-2 bd-highlight">
            <h6 class="text-white">Address:</h6>
            <p class="ment">246 obi wali Rumuigbo PH Rivers State</p>
          </div>
        </div>
      </div>
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight del">
          <div class=" bd-highlight back" v-for="(check, i) in foot" :key="i">
            <div class="d-flex flex-column bd-highlight">
              <div class="bd-highlight mb-4">
                <h6 class="text-white">{{check.head}}</h6>
              </div>
              <div class="bd-highlight">
                <p class="ment" v-for="(done, d) in check.detail" :key="d">{{done}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
      <div class="p-2 bd-highlight">
        <h6 class="text-white">Contact Info</h6>
        <a href="tel:+2348063365591" class="ment">O8063365591</a><br>
        <a href="mailto:info@shabtech.com" class="ment">info@shabtech.com</a>
      </div>
      <div class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight">
          <div class=" bd-highlight hand">
            <a href="https://twitter.com/ElizabethOnyen6">
              <i class="fab fa-twitter text-white"></i>
            </a>
          </div>
          <div class="ml-3 bd-highlight">
            <a href="">
              <i class="fab fa-facebook-f text-white"></i>
            </a>
          </div>
          <div class="ml-3 bd-highlight">
            <a href="https://www.facebook.com/elizabeth.onyenekwe">
              <i class="fab fa-instagram text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="leng w-100"></div>
    <p class="text-center mt-5 mb-0 pb-5 ment">Copyright 2020, shabtech All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      foot:[
        {
          head:'Useful Links',
          detail:['About Us', 'Service', 'News & Blog']
        },
        {
          head:'Services',
          detail:['Web Design', 'Web Application', 'Mobile Application', 'Web Development']
        },
        {
          head:'Support',
          detail:['Contact', 'Privacy Policy', 'Terms Of Service', 'Sitemap']
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>