<template>
  <div>
    <div>
      <router-link to="/first">FIRST</router-link>
      <router-link to="/second">SECOND</router-link>
      <router-link to="/mine-sweeper">MINE-SWEEPER</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../src/router/index';
export default {
  name: 'App',
  router,
  components: {},
};
</script>
