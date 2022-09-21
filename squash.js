const array1 = [{id: {uuid: 1}}, {id: {uuid: 2}}, {id: {uuid: 3}}, {id: {uuid: 4}}, {id: {uuid: 5}}, {id: {uuid: 6}}, {id: {uuid: 7}}];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (acc, cur) => {
      const {id} = cur;
      const {uuid} = id;
      return {
          ...acc,
        [uuid]: {value: uuid}
      }
  }
  ,{}
);

console.log(sumWithInitial);
// expected output: 10