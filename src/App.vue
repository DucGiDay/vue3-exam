<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import AppLayout1 from '@/layouts/AppLayout1.vue'
import Default from '@/layouts/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    AppLayout1,
    Default
  },
  // data() {
  //   return {
  //     layout: 'app-layout1' // app-layout1 => AppLayout1
  //   }
  // },
  computed: {
    layout() {
      console.log(this.$route.meta.layout)
      return (this.$route.meta.layout || 'app-layout1')
    }
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
}

h1,
h2,
h3,
h4 {
  margin: 0px;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
