<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ListHeader from './views/list/components/index'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ListHeader
  }
}
</script>
