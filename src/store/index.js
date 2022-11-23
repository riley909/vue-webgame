import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

const store = new Vuex.Store({
  state: {
    tableData: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0,
    },
    timer: 0,
    result: '',
  }, // vue의 data와 비슷
  getters: {}, // vue의 computed와 비슷
  mutations: {
    [START_GAME](state, { row, cell, mine }) {
      // 사용자가 게임 시작시 행,열, 지뢰 숫자 정할 수 있음
      // 배열이나 객체 안의 개별 속성, 인덱스로 접근해서 데이터 수정했을때
      // 데이터는 변경되어도 화면이 변경되지 않을 수 있기 때문에 Vue.set()사용해야함
      // state.date.row = row 가 아니라 Vue.set(state.data, 'row', row) 임
      state.data = {
        row,
        cell,
        mine,
      };
      state.tableData = plantMine(row, cell, mine);
      state.timer = 0;
    },
    [OPEN_CELL](state) {},
    [CLICK_MINE](state) {},
    [FLAG_CELL](state) {},
    [QUESTION_CELL](state) {},
    [NORMALIZE_CELL](state) {},
    [INCREMENT_TIMER](state) {},
  }, // state를 수정할 때(동기)
  actions: {}, // 비동기 사용, 여러 뮤테이션을 연달아 실행할 때
});

export default store;
