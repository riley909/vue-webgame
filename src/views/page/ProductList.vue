<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 20" :key="i">
        <product-item></product-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from '@/components/product/ProductItem';
export default {
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped></style>
