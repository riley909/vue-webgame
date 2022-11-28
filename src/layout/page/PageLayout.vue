<template>
  <v-app>
    <page-bar />
    <page-view />
  </v-app>
</template>

<script>
export default {
  name: 'PageLayout',
  components: {
    PageBar: () => import('./AppBar'),
    PageView: () => import('./View'),
  },
};
</script>

<style lang="scss" scoped></style>
