<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-data-table v-bind="$attrs" v-on="$listeners">
      <!-- 데이터 테이블을 커스텀 컴포넌트화 했을 때 슬롯 사용하는법 -->
      <!-- 데이터 테이블 API 페이지에 슬롯 참고 -->
      <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="item">
        <slot :name="name" v-bind="item"></slot>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'AppDataTable',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
