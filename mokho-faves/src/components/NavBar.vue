<template>
  <div
    class="flex justify-content-between card-container blue-container w-full"
  >
    <div class="flex align-items-center justify-content-center">
      <Image imageClass=" w-4rem h-4rem" src="images/logo_transparent.png" />
    </div>
    <div class="flex align-items-center justify-content-center">
      <MegaMenu
        :model="items"
        class="pb-0 bg-white border-noround border-none flex align-items-center justify-content-center"
      />
    </div>
    <div
      class="w-4rem h-4rem flex align-items-center justify-content-center"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const items = [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "About",
        to: "/about",
      },
      {
        label: "Collection",
        to: "/collection",
      },
      {
        label: "Contact Us",
        to: "/contact-us",
      },
    ];
    return { items };
  },
});
</script>
