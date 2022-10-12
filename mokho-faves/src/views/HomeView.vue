<template>
  <div class="card mb-5 px-8">
    <div
      class="flex justify-content-center h-30rem home-collection-background-image relative"
    >
      <p class="absolute text-white text-6xl bottom-50">M_</p>
      <p class="absolute text-white text-6xl home-shop-name">Faves</p>
      <RouterLink
        :to="{ name: 'collection' }"
        class="absolute text-white home-shop-collection underline"
      >
        <p class="">Shop Collection</p>
      </RouterLink>
    </div>
  </div>
</template>
