<template>
  <div class="app">
    <main class="flex-fill">
      <Header />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
<style>
.flex-fill {
  margin: 10px 250px 50px 250px;
}
.app{
  height: 100vh;
  
  }
</style>