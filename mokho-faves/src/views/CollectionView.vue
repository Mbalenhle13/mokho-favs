<template>
  <div class="grid">
    <div class="col-4">
      Filter By
      <Divider class="center border-1 border-50"> </Divider>
      <Accordion :multiple="true" :activeIndex="[0]" class="border-none">
        <AccordionTab
          header="Collection"
          contentClassName="color-red"
          headerClassName="color-red"
        >
          <p>All</p>
          <p>Dresses</p>
          <p>Sets</p>
          <p>Pants</p>
          <p>Accessories</p>
          <p>Shoes</p>
          <p>Clearance Sale</p>
        </AccordionTab>
        <AccordionTab header="Size">
          <div class="field-checkbox">
            <Checkbox
              inputId="sizeLarge"
              name="sizeLarge"
              value="Large"
              v-model="sizes"
            />
            <label for="sizeLarge">L</label>
          </div>
          <div class="field-checkbox">
            <Checkbox
              inputId="sizeMedium"
              name="sizeMedium"
              value="Medium"
              v-model="sizes"
            />
            <label for="sizeMedium">M</label>
          </div>
          <div class="field-checkbox">
            <Checkbox
              inputId="sizeSmall"
              name="sizeSmall"
              value="Small"
              v-model="sizes"
            />
            <label for="sizeSmall">S</label>
          </div>
          <div class="field-checkbox">
            <Checkbox
              inputId="sizeXLarge"
              name="sizeXLarge"
              value="Extra Large"
              v-model="sizes"
            />
            <label for="sizeXLarge">XL</label>
          </div>
          <div class="field-checkbox">
            <Checkbox
              inputId="sizeXSmall"
              name="sizeXSmall"
              value="Extra Small"
              v-model="sizes"
            />
            <label for="sizeXSmall">XS</label>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
    <div class="col bg-pink-300">2</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    // const checked = ref(false);
    const sizes = ref([]);
    return { sizes };
  },
};
</script>

<style lang="scss" scoped>
.color-red a,  /* Header */
.color-red .p-accordion-content {
  /* Content */
  color: red !important;
  background-color: red !important;
}
</style>
