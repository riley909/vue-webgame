<template>
  <v-app>
    <default-bar @drawer="drawer = !drawer" />
    <default-drawer v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar: () => import('./AppBar'),
    DefaultDrawer: () => import('./Drawer'),
    DefaultView: () => import('./View'),
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="scss" scoped></style>
