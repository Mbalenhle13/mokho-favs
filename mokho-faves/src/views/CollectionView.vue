<template>
  <div class="grid">
    <div class="col-2">
      Filter By
      <Divider class="center border-1 border-50"> </Divider>
      <Accordion :multiple="true" :activeIndex="[0]" class="border-none">
        <AccordionTab header="Collection">
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
    <div class="col">
      <DataView
        :value="products"
        :layout="layout"
        :paginator="true"
        :rows="9"
        :sortOrder="sortOrder"
        :sortField="sortField"
      >
        <template #header>
          <div class="grid grid-nogutter">
            <div class="col-6" style="text-align: left">
              <Dropdown
                v-model="sortKey"
                :options="sortOptions"
                optionLabel="label"
                placeholder="Sort By Price"
                @change="onSortChange($event)"
              />
            </div>
          </div>
        </template>

        <template #grid="slotProps">
          <div class="col-12 md:col-4">
            <div class="product-grid-item card">
              <div class="flex justify-content-end">
                <span
                  :class="
                    'product-badge status-' +
                    slotProps.data.inventoryStatus.toLowerCase()
                  "
                  >{{ slotProps.data.inventoryStatus }}</span
                >
              </div>
              <div class="text-center">
                <img
                  :src="slotProps.data.image"
                  :alt="slotProps.data.name"
                  class="h-12 w-12"
                />
                <div class="mb-1">
                  {{ slotProps.data.name }}
                </div>
              </div>
              <div class="product-grid-item-bottom flex justify-content-center">
                <span>${{ slotProps.data.price }}</span>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductService from "../service/ProductService";

export default {
  setup() {
    onMounted(() => {
      productService.value
        .getProducts()
        .then((data) => (products.value = data));
    });

    const sizes = ref([]);
    const products = ref();
    const productService = ref(new ProductService());
    const layout = ref("grid");
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: "Price High to Low", value: "!price" },
      { label: "Price Low to High", value: "price" },
    ]);
    const onSortChange = (event) => {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
      } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
      }
    };
    return {
      sizes,
      products,
      layout,
      sortKey,
      sortOrder,
      sortField,
      sortOptions,
      onSortChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff;
  padding: 2rem;
  margin-bottom: 2rem;
}

::v-deep(.product-grid-item) {
  margin: 0.5rem;
  // border: 1px solid var(--surface-border);

  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 1rem 0;
  }
}
</style>
