<template>
<div id="app">
  <b-container>
    <b-row>
      <b-col>
        <app-header></app-header>
      </b-col>
      <b-col cols="8">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script type="text/javascript">
  import Header from './views/Home.vue'
  export default {
    components: {
      'app-header': Header
    }
  }
</script>


<style lang="scss" scoped>
</style>
