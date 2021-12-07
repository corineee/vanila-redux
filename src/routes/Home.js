import React, { useState } from "react";
import { add } from "../store";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";

function Home(toDos, addToDo) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  //Redux state로부터 home(component)에 prop으로써 전달한다는 것이다.
  return { toDos: state };
} //이 함수로 store로부터 state를 Home에 가져다 줄 것이다.

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); //store와 component를 connect 하는 방법이다.
