<script lang="ts">
import { RouterView } from 'vue-router'

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default {
  setup() {
    return {}
  },
  components: {}
}
</script>

<template>
  <div class="min-height100vh">
    <div class="d-flex min-height100vh">
      <RouterView id="content"/>
    </div>
  </div>
</template>


<style lang="scss"></style>