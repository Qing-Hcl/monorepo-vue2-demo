<template>
  <div class="home">
    <HelloWorld msg="Demo-B"/>
  </div>
</template>

<script>
import { HelloWorld } from 'demo-common'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
