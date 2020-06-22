<template>
  <div class="serve" id="work">
    <div class="mx-auto mt-5 position-relative provide">
      <img src="/img/Mask Group 8.svg" alt />
      <p class="position-absolute we">We Provide you with</p>
    </div>
    <div class="container py-5">
      <div class="soft mx-auto">
        <div class="col custom" v-for="(done, i) in work" :key="i">
          <div class="d-flex flex-column adjust bd-highlight mt-5">
            <div class="p-2 bd-highlight web">
              <img :src="`/img/${done.image}`" class="w-100" alt />
            </div>
            <div class="p-2 bd-highlight word">{{done.task}}</div>
            <div class="p-2 bd-highlight press">{{done.explain}}</div>
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
      work: [
        {
          image: "web.svg",
          task: "Custom Wordpress Development:",
          explain:
            "Our team of expert developers adequately delivers codes that is efficient and secure. Our team will carefully work with you on"
        },
        {
          image: "Design Process-bro.svg",
          task: "UI/UX Design:",
          explain:
            "Design centric development brings your idea to life as you imagine it. We do more than create design. We connect..."
        },
        {
          image: "Active Support-bro.svg",
          task: "Strategy and Consulting:",
          explain:
            "Expert advice goes a long way on a complex project. We have team of experts to help..."
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>