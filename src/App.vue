<script setup>
import TopBar from "./components/TopBar.vue";
import NavBar from "./components/NavBar.vue";
import FooterNav from "./components/FooterNav.vue";
</script>

<template>
  <div>
    <header>
      <div class="flex-column w-12">
        <TopBar />
        <NavBar />
      </div>
    </header>
    <body>
      <RouterView></RouterView>
    </body>

    <footer class="bottom-100">
      <FooterNav />
    </footer>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }
}
</style>
