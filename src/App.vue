<script setup>
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
// import FooterNav from './components/FooterNav.vue';
// import NavBar from './components/NavBar.vue';
import TopBar from "./components/TopBar.vue";
import NavBar from "./components/NavBar.vue";
import FooterNav from "./components/FooterNav.vue";
</script>

<template>
  <div>
    <header>
      <div class="flex-column w-12">
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
        <!-- <HelloWorld msg="You did it!" /> -->
        <TopBar />
        <NavBar />
      </div>
    </header>
    <body>
      <RouterView></RouterView>
      <!-- <NavBar /> -->
    </body>

    <footer class="bottom-100">
      <FooterNav />
    </footer>
  </div>

  <!--  <div>

  </div> -->

  <!-- <RouterView /> -->
</template>

<style scoped>
/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 10); */
  }

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
