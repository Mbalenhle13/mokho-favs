<template>
  <div class="col-12 flex justify-content-center w-full">
    <Menubar :model="items" class="border-none">
      <template #start>
        <Image imageClass=" w-8rem h-8rem" src="images/tan-logo.png" />
      </template>
    </Menubar>
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

<style scoped>
::v-deep(.p-menubar .p-menubar-button) {
  color: #003300;
  background: #ffff;
}
::v-deep(.p-menubar .p-menubar-button:hover) {
  color: #003300;
  background: #ffff;
}
</style>
