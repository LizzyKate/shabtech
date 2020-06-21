<template>
  <div >
      <ban/>
      <about/>
      <serve/>
      <explain/>
      <solve/>
      <blog/>
  </div>
</template>

<script>

import ban from '../components/banner';
import about from '../components/about';
import serve from '../components/service';
import explain from '../components/explain';
import solve from '../components/solve';
import blog from '../components/blog';

export default {
  components:{
      ban,
      about,
      serve,
      explain,
      solve,
      blog
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>