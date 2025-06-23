import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "INCREMENT+2":
      return { value: state.value + 2 };
    case "DECREMENT-2":
      return { value: state.value - 2 };
    default:
      return state;
  }
};

const Counter = () => {
  /**
   * state : 변수/객체 저장 변수
   * dispatch : 액션(선택값) 전달함수
   * reducer : 액션 수신함수
   *           액션에 따라 변수/객체값 변화 함수
   * {value:0} : state객체
   */
  //    [변수, 전달함수] = useReducer(수신함수, state초기값)
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>++</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>--</button>
      <button onClick={() => dispatch({ type: "INCREMENT+2" })}>+2</button>
      <button onClick={() => dispatch({ type: "DECREMENT-2" })}>-2</button>
    </div>
  );
};

export default Counter;
