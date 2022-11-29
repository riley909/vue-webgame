<template>
  <div>
    <mine-form />
    <div>{{ timer }}</div>
    <table-component />
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { INCREMENT_TIMER } from '@/store/modules/mineSweeper';
import TableComponent from '@/components/TableComponent';
import MineForm from '@/components/MineForm';

let interval;

export default {
  name: 'MineSweeper',
  components: {
    TableComponent,
    MineForm,
  },
  computed: {
    ...mapState('mineSweeper', ['timer', 'result', 'halted']),
  },
  watch: {
    halted(value) {
      if (value === false) {
        // false일때 게임 시작
        interval = setInterval(() => {
          this.$store.commit(`mineSweeper/${INCREMENT_TIMER}`);
        }, 1000);
      } else {
        // 게임 중단
        clearInterval(interval);
      }
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
