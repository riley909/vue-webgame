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

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0 이상이면 다 opened
};

const plantMine = (row, cell, mine) => {
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => i);
  const shuffle = [];

  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);
  }

  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }
  return data;
};

const store = new Vuex.Store({
  state: {
    tableData: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0,
    },
    timer: 0,
    halted: true, // 타이머 중단
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
    [OPEN_CELL](state, { row, cell }) {
      let openedCount = 0;
      const checked = [];

      function checkAround() {
        const checkRowOrCellIsUndefined =
          row < 0 || row >= state.tableData.length || cell < 0 || cell >= state.tableData[0].length;

        // 로우나 셀이 없는 숫자일때 검사하지 않고 리턴
        if (checkRowOrCellIsUndefined) return;

        // 주변 칸이 빈칸이 아닌 모든 경우에는 검사하지 않고 리턴
        if (
          [CODE.OPENED, CODE.FLAG, CODE.FLAG_MINE, CODE.QUESTION_MINE, CODE.QUESTION].includes(
            state.tableData[row][cell]
          )
        ) {
          return;
        }

        if (checked.includes(row + '/' + cell)) {
          // checked에 있으면 열었던 칸이므로 검사하지 않고 리턴
          return;
        } else {
          // checked에 없으면 열지 않았던 칸이므로 열고 checked에 추가
          checked.push(row + '/' + cell);
        }

        // 주변 8칸 지뢰인지 검색
        // around에 row -1, 0, +1 cell -1, 0, +1 돌면서 주변 8칸 수집
        let around = [];
        if (state.tableData[row - 1]) {
          around = around.concat([
            state.tableData[row - 1][cell - 1],
            state.tableData[row - 1][cell],
            state.tableData[row - 1][cell + 1],
          ]);
        }
        around = around.concat([state.tableData[row][cell - 1], state.tableData[row][cell + 1]]);

        if (state.tableData[row + 1]) {
          around = around.concat([
            state.tableData[row + 1][cell - 1],
            state.tableData[row + 1][cell],
            state.tableData[row + 1][cell + 1],
          ]);
        }

        // around에 모은 8칸중 지뢰칸을 제거
        const counted = around.filter((v) => {
          return [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v);
        });

        if (counted.length === 0 && row > -1) {
          // 주변칸에 지뢰가 하나도 없으면 near에 주변칸 push
          const near = [];

          // undefined check
          if (row - 1 > -1) {
            near.push([row - 1, cell - 1]);
            near.push([row - 1, cell]);
            near.push([row - 1, cell + 1]);
          }

          near.push([row, cell - 1]);
          near.push([row, cell + 1]);

          // undefined check
          if (row + 1 < state.tableData.length) {
            near.push([row + 1, cell - 1]);
            near.push([row + 1, cell]);
            near.push([row + 1, cell + 1]);
          }

          near.forEach((n) => {
            if (state.tableData[n[0]][n[1]] !== CODE.OPENED) {
              checkAround(n[0], n[1]);
            }
          });
        }

        if (state.tableData[row][cell] === CODE.NORMAL) openedCount += 1;
        Vue.set(state.tableData[row], cell, counted.length);
      }
      checkAround(row, cell);
      let halted = false;
      let result = '';
      if (state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount) {
        halted = true;
        result = `${state.timer}초만에 승리하셨습니다.`;
      }
      state.openedCount += openedCount;
      state.halted = halted;
      state.result = result;
    },
    [CLICK_MINE](state, { row, cell }) {
      state.halted = true;
      Vue.set(state.tableData[row], cell, CODE.CLICKED_MINE);
    },
    [FLAG_CELL](state, { row, cell }) {
      if (state.tableData[row][cell] === CODE.MINE) {
        Vue.set(state.tableData[row], cell, CODE.FLAG_MINE);
      } else {
        Vue.set(state.tableData[row], cell, CODE.FLAG);
      }
    },
    [QUESTION_CELL](state, { row, cell }) {
      if (state.tableData[row][cell] === CODE.FLAG_MINE) {
        Vue.set(state.tableData[row], cell, CODE.QUESTION_MINE);
      } else {
        Vue.set(state.tableData[row], cell, CODE.QUESTION);
      }
    },
    [NORMALIZE_CELL](state, { row, cell }) {
      if (state.tableData[row][cell] === CODE.QUESTION_MINE) {
        Vue.set(state.tableData[row], cell, CODE.MINE);
      } else {
        Vue.set(state.tableData[row], cell, CODE.NORMAL);
      }
    },
    [INCREMENT_TIMER](state) {
      state.timer += 1;
    },
  }, // state를 수정할 때(동기)
  actions: {}, // 비동기 사용, 여러 뮤테이션을 연달아 실행할 때
});

export default store;
