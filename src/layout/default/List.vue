<template>
  <v-list expand dense nav>
    <!-- 하위메뉴가 있으면 list-group, 없으면 list-item -->
    <template v-for="(item, index) in items">
      <default-list-group v-if="item.items" :key="`group-${index}`" :item="item" />
      <default-list-item v-else :key="`item-${index}`" :item="item" />
    </template>
  </v-list>
</template>

<script>
import DefaultListItem from './ListItem';
import DefaultListGroup from './ListGroup';

export default {
  name: 'DefaultList',
  components: {
    DefaultListItem,
    DefaultListGroup,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
