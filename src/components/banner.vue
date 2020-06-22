<template>
  <div class="ban position-relative">
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color shab">
      <a class="navbar-brand pl-5" href="#">
        <img src="/img/Group 10.svg" class="w-100" alt />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse pr-5" id="navbarSupportedContent-4">
        <ul class="navbar-nav ml-auto list">
          <li class="nav-item">
            <a href="#work" class="nav-link go">Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blog">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Say Hello</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="humans">
      <h1>
        Made By Humans
        <br />powered by WordPress
      </h1>
      <div class="modify">
        <img src="/img/Mask Group 9.svg" class="cont" alt />
        <a href="tel:+2348063365591" class="us">Contact Us</a>
      </div>
    </div>
    <div class="position-absolute flex-row bd-highlight tweet">
      <div class="p-2 bd-highlight">
        <a href="https://twitter.com/ElizabethOnyen6" class="text-white">Twitter</a>
      </div>
      <div class="p-2 bd-highlight ml-4">
        <a href="https://www.facebook.com/elizabeth.onyenekwe" class="text-white">Facebook</a>
      </div>
    </div>
    <div class="hide">
      <div class="position-absolute p-2 bd-highlight linear">scroll</div>
      <div class="p-2 bd-highlight line"></div>
    </div>
    <div class="flex-row bd-highlight item justify-content-between align-items-center">
      <div class="p-2 bd-highlight flex-grow-1"></div>
      <div>
        <div class="p-2 bd-highlight">
          <div class="container">
            <div class="row">
              <div class="col-sm" v-for="(done, i) in service" :key="i">
                <div class="d-flex flex-row justify-content-between align-items-center">
                  <div class="bd-highlight shift">
                    <img :src="`/img/${done.image}`" alt />
                  </div>
                  <div class="ml-4 d-flex flex-column bd-highlight">
                    <div class="bd-highlight what">{{done.head}}</div>
                    <div class="bd-highlight build w-50">{{done.text}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: [
        {
          image: "Loader.svg",
          head: "What we do",
          text:
            "We build product that solve real problems & focusing on the labour market."
        },
        {
          image: "Loader2.svg",
          head: "Implement Next",
          text: "Technologies that open gates to your mind"
        },
        {
          image: "Loader3.svg",
          head: "Constitution",
          text: "Open discussion about new trends"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>