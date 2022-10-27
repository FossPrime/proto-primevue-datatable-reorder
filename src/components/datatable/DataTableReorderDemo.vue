<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>DataTable <span>Reorder</span></h1>
        <p>Order of the columns and rows can be changed using drag and drop.</p>
      </div>
    </div>

    <div class="content-section implementation">
      <div class="card">
        <DataTable
          :value="products"
          :reorderableColumns="true"
          @columnReorder="onColReorder"
          @rowReorder="onRowReorder"
          responsiveLayout="scroll"
        >
          <Column
            :rowReorder="true"
            headerStyle="width: 3rem"
            :reorderableColumn="false"
          />
          <Column
            v-for="col of columns"
            :key="col.field"
            :field="col.field"
            :header="col.header"
          ></Column>
        </DataTable>
      </div>
    </div>

    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import ProductService from '../../service/ProductService'

onMounted(async () => {
  const data = await new ProductService().getProductsSmall()
  products.value = data
})

const toast = useToast()
const columns = ref([
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
])

// Just an array of objects
// We will mutate this in onRowReorder
const products = ref()

const onColReorder = (event) => {
  toast.add({
    severity: 'success',
    summary: `Column #${event.dragIndex} moved to #${event.dropIndex}`,
    life: 3000
  })
}
const onRowReorder = (event) => {
  products.value = event.value // MANDATORY, for rows... but not for columns
  toast.add({ severity: 'success', summary: 'Rows Reordered', life: 3000 })
}
</script>

<style>
/* https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#setting_the_drag_feedback_image */
.p-datatable-tbody tr[draggable='true'],
.p-datatable-thead th[draggable='true'] {
  opacity: 0.69;
}
</style>
