<template>
  <v-list dense nav>
    <v-list-item
      v-for="(item, index) in items"
      :key="`item-${index}`"
      link
      :to="item.to"
      class="py-1"
      active-class="primary white--text"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'DefaultList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
