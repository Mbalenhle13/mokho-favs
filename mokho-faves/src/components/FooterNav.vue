<template>
  <div class="card surface-900 text-white">
    <div class="card-container flex justify-content-center gap-8">
      <div class="align-items-center">
        <RouterLink :to="{ name: 'home' }" class="block no-underline text-white">
          <p>Home</p>
        </RouterLink>
        <RouterLink :to="{ name: 'collection' }" class="block no-underline text-white">
          <p>Collection</p>
        </RouterLink>
        <RouterLink :to="{ name: 'contactUs' }" class="block no-underline text-white">
          <p>Contact Us</p>
        </RouterLink>
      </div>
      <div class="align-items-center justify-content-center">
        <p class="block">Terms & Conditions</p>
        <p class="block">Refunds Policy</p>
        <p class="block">FAQ</p>
      </div>
      <div class="align-items-center justify-content-center">
        <p class="block">Facebook</p>
        <p class="block">Instagram</p>
        <p class="block">Yaga</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  methods: {},
};
</script>
