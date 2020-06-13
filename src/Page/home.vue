<template>
  <div >
      <ban/>
      <about/>
      <serve/>
      <explain/>
      <solve/>
  </div>
</template>

<script>

import ban from '../components/banner';
import about from '../components/about';
import serve from '../components/service';
import explain from '../components/explain';
import solve from '../components/solve'

export default {
  components:{
      ban,
      about,
      serve,
      explain,
      solve
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>