<template>
  <div class="full-window-height">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      state: state => state
    })
  }
}
</script>

<style>
.full-window-height {
  min-height: 100vh;
  background-color: #FFFFFF;
}
</style>
