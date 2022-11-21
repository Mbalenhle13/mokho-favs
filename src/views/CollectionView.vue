<template>
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
      <div class="flex justify-content-end pr-5">
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
      <div class="md:col-3 sm:col-2">
        <div class="product-grid-item card">
        <div class="flex justify-content-end">
          <span class="pr-1">
              <i class="pi pi-circle-fill" style="color:bisque "></i>
          </span>
          <span class="pr-1">
              <i class="pi pi-circle-fill" style="color:black "></i>
          </span>
          <span class="pr-1">
              <i class="pi pi-circle-fill" style="color:brown "></i>
          </span>
        </div>
          <!-- <div class="flex justify-content-end">
            <span
              :class="
                'product-badge status-' +
                slotProps.data.inventoryStatus.toLowerCase()
              "
              >{{ slotProps.data.inventoryStatus }}</span
            >
          </div> -->
          <div class="text-center">
            <img
              :src="slotProps.data.image2"
              :alt="slotProps.data.name"
              class="h-6 w-6"
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
    });

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

// ::v-deep(.product-grid-item) {
//   margin: 0.5rem;

//   img {
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     margin: 1rem 0;
//   }
// }
</style>
