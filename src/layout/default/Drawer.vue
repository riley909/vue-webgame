<template>
  <v-navigation-drawer v-model="drawer" v-bind="$attrs" dark :src="require('@/assets/sidebar.jpeg')" app>
    <template #img="props">
      <v-img :gradient="gradient" v-bind="props" />
    </template>
    <default-drawer-header />
    <v-divider />

    <default-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader: () => import('./DrawerHeader'),
    DefaultList: () => import('./List'),
  },
  computed: {
    ...mapState('app', {
      gradient: 'gradient',
      items: 'items',
    }),
    drawer: {
      get() {
        return this.$store.getters['app/getDrawer'];
      },
      set(value) {
        return this.$store.commit('app/setDrawer', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
