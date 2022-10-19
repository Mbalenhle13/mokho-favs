<template>
  <div class="grid">
    <div class="col-2 mt-7">
      <div class="font-light line-height-2 text-xl green-text">Filter By</div>
      <Divider class="center border-1 border-50"> </Divider>
      <Accordion :multiple="true" :activeIndex="[0]">
        <AccordionTab header="Sort By Price">
          <Listbox
            v-model="sortKey"
            :options="sortOptions"
            optionLabel="label"
            @change="onSortChange($event)"
            class="border-none p-2"
          />
          <!-- <p>All</p>
          <p>Dresses</p>
          <p>Sets</p>
          <p>Pants</p>
          <p>Accessories</p>
          <p>Shoes</p>
          <p>Clearance Sale</p> -->
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
                <span>R{{ slotProps.data.price }}</span>
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
  color: #003300;
  padding: 2rem;
  margin-bottom: 2rem;
}

::v-deep(.p-accordion
    .p-accordion-header:not(.p-disabled).p-highlight
    .p-accordion-header-link),
::v-deep(.p-accordion
    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
    .p-accordion-header-link),
::v-deep(.p-accordion .p-accordion-header .p-accordion-header-link) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  background-color: white;
  border-color: white;
  color: #003300;
  font-weight: lighter;
  padding-left: 0;
}

::v-deep(.p-accordion .p-accordion-content) {
  border-style: hidden;
  padding: 0;
}

.product-badge {
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
  border-radius: 2px;
}

.product-badge {
  &.status-instock {
    background: #c8e6c9;
    color: #256029;
  }

  &.status-outofstock {
    background: #ffcdd2;
    color: #c63737;
  }

  &.status-lowstock {
    background: #feedaf;
    color: #8a5340;
  }
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
