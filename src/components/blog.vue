<template>
  <div>
    <div class="blog mx-auto" id="blog">
      <p class="wor">Blog</p>
      <h5 class="news">Here's our latest news</h5>
    </div>
    <div class="container mx-auto my-5">
      <div class="row block">
        <div class="col details p-0" v-for="(read, i) in blog" :key="i">
          <div class="d-flex flex-column bd-highlight mb-3">
            <div class="bd-highlight">
              <img :src="`/img/${read.image}`" class="w-100" alt />
            </div>
            <div class="ml-4 w-50 mt-5 bd-highlight">
              <p class="lorem">{{read.title}}</p>
            </div>
            <div class="pr-2 ml-4 bd-highlight">
              <p
                class="lo"
              >{{read.detail}}</p>
            </div>
            <div class="learn bd-highlight text-center ">
              <img :src="`/img/${read.learn}`" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blog:[
        {
          image:'business-camera-coffee-1509428@2x.png',
          title:'Lorem ipsum dolor sit amet',
          detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut est laborum.',
          learn:'Group 437.svg'
        },
        {
          image:'business-business-women-collaborate-1569076.png',
          title:'Lorem ipsum dolor sit amet',
          detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut est laborum.',
          learn:'Group 437.svg'
        },
        {
          image:'rawpixel-594848-unsplash@2x.png',
          title:'Lorem ipsum dolor sit amet',
          detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut est laborum.',
          learn:'Group 437.svg'
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>