<template>
  <div class="grid">
    <!-- TODO: Add Size and Category Filters <div class="lg:col-2 mt-7">
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
        </AccordionTab>
      </Accordion>
    </div> -->
    <div class="col">
      <!-- <Skeleton height="30rem" /> -->
      <DataView
        :value="collectionStock"
        :layout="layout"
        :paginator="true"
        :rows="9"
        :sortOrder="sortOrder"
        :sortField="sortField"
        v-model:filters="filter"
      >
        <template #header>
          <div class="flex justify-content-end pr-5 border-none">
            <div style="text-align: right">
              <Dropdown
                class="border-none"
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
                <span>{{ formatCurrency(slotProps.data.price) }} </span>
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
import { fetchCollectionData } from "../firebase/stock";

export default {
  setup() {
    const collectionStock = ref();
    const sizes = ref([]);
    const layout = ref("grid");
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: "Price High to Low", value: "!price" },
      { label: "Price Low to High", value: "price" },
    ]);

    onMounted(async () => {
      collectionStock.value = await fetchCollectionData();
      // sortedArray(collectionStock.value);
    });

    // function sortedArray () {
    //   function compare(a, b) {
    //     if (a.inventoryStatus < b.inventoryStatus)
    //       return -1;
    //     if (a.inventoryStatus> b.inventoryStatus)
    //       return 1;
    //     return 0;
    //   }

    //   return this.arrays.sort(compare);
    // }

    const formatCurrency = (value) => {
      return value.toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      });
    };

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
      collectionStock,
      sizes,
      layout,
      formatCurrency,
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

::v-deep(.p-dataview .p-dataview-header) {
  border-style: hidden;
}

::v-deep(.p-dropdown:not(.p-disabled).p-focus) {
  box-shadow: inset 0 0 0 2px #605e5c;
  border-color: #605e5c;
}

// ::v-deep(.p-accordion
//     .p-accordion-header:not(.p-disabled).p-highlight
//     .p-accordion-header-link),
// ::v-deep(.p-accordion
//     .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
//     .p-accordion-header-link),
// ::v-deep(.p-accordion .p-accordion-header .p-accordion-header-link) {
//   display: flex;
//   flex-direction: row-reverse;
//   justify-content: space-around;
//   background-color: white;
//   border-color: white;
//   color: #003300;
//   font-weight: lighter;
//   padding-left: 0;
// }

// ::v-deep(.p-accordion .p-accordion-content) {
//   border-style: hidden;
//   padding: 0;
// }

.product-badge {
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
  border-radius: 2px;
}

.product-badge {
  //Maybe change these to Awaiting payment, Purchased, Available ?
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
