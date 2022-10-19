<template>
  <div class="card footer-nav-color text-white">
    <div class="card-container flex justify-content-center gap-8">
      <div class="align-items-center">
        <RouterLink
          :to="{ name: 'home' }"
          class="block no-underline text-white"
        >
          <p>Home</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'collection' }"
          class="block no-underline text-white"
        >
          <p>Collection</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'contactUs' }"
          class="block no-underline text-white"
        >
          <p>Contact Us</p>
        </RouterLink>
      </div>
      <div class="align-items-center justify-content-center">
        <p class="block">Terms & Conditions</p>
        <p class="block">Refunds Policy</p>
        <p class="block">FAQ</p>
      </div>
      <div class="align-items-center justify-content-center">
        <a
          href="https://www.facebook.com/profile.php?id=100084520276452"
          class="block text-white no-underline mt-3"
          ><i class="pi pi-facebook mr-2"></i>Facebook</a
        >
        <a
          href="https://www.instagram.com/mokhofavs95/"
          class="block text-white no-underline mt-3"
          ><i class="pi pi-instagram mr-2"></i>Instagram</a
        >
        <a
          href="https://www.yaga.co.za/mokhofavs95"
          class="block text-white no-underline mt-3"
          ><i class="pi pi-box mr-2"></i>Yaga</a
        >
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
