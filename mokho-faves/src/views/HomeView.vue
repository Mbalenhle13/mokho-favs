<template>
  <div class="card mb-5 px-8">
    <div
      class="flex justify-content-center h-30rem home-collection-background-image relative"
    >
      <p class="absolute text-white text-md home-shop-slogan">
        Fast fashion clothing reseller | EST. 2022
      </p>
      <p class="absolute text-white text-8xl home-shop-name">M_Favs</p>
      <RouterLink
        :to="{ name: 'collection' }"
        class="absolute text-white home-shop-collection underline"
      >
        <p class="">See our collection</p>
      </RouterLink>
    </div>
    <h1 class="font-light font-italic green-text text-center">Our story</h1>
    <p class="font-light font-italic green-text text-center pb-3 px-8">
      Mokho Faves is a proudly South African reseller store, founded in 2022.
      We're driven to bring the latest, quality, and stylish fashion to
      consumers rapidly and at a more affordable price. Help make us the #1
      Fashion Reseller in South Africa.
    </p>
  </div>
</template>
