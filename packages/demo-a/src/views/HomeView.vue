<template>
  <div class="home">
    <HelloWorld msg="Demo-A"/>
  </div>
</template>

<script>
import HelloWorld from 'demo-common/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
