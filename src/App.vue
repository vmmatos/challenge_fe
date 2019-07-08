<template>
  <div id="app">
    <div class="main-wrapper">
      <app-header />
    </div>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
