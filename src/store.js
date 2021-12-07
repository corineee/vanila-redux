import { configureStore, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

/* redux toolkit */
// const reducer = createReducer([], {
//   //createReducer는 state를 mutate할 수 있다. 새로운 state를 리턴할 수 있고, state를 mutate할 수 있다.
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); //state를 mutate하게 되면 아무것도 리턴하지 않는다.
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload), //새로운 state를 리턴하면 return한다.
// }); //filter는 새로운 array를 리턴한다.

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.action; //toDos.actions으로부터 add와 remove 라는 actions을 export 할 수 있다.

export default configureStore({ reducer: toDos.reducer });
