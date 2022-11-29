<!-- Transparent wrapper Component -->

<template>
  <label>
    {{ label }}
    <v-text-field class="mt-1" outlined dense v-bind="$attrs" v-on="$listeners" />
  </label>
</template>

<script>
export default {
  name: 'AppTextField',
  inheritAttrs: false,
  props: {
    dense: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>
