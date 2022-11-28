<template>
  <v-app>
    <authentication-view />
  </v-app>
</template>

<script>
export default {
  name: 'AuthenticationLayout',
  components: {
    AuthenticationView: () => import('./View'),
  },
};
</script>

<style lang="scss" scoped></style>
