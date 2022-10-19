<template>
  <div class="flex justify-content-center card-container blue-container w-full">
    <div class="flex align-items-center justify-content-center">
      <Image imageClass=" w-8rem h-8rem" src="images/tan-logo.png" />
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
        to: { name: "home" },
      },
      {
        label: "Collection",
        to: { name: "collection" },
      },
      {
        label: "Contact Us",
        to: { name: "contactUs" },
      },
    ];
    return { items };
  },
});
</script>
