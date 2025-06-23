import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

/*
    사용자 정의 훅(Custom Hook)
    1) 이름이 use로 시작되어야 한다.(내부에서 다른 Hook을 호출하는 컴포넌트)
       리액트는 이 이름을 보고 컴포넌트 내부에서 Hook을 호출하는 것을 알게 된다.
    2) 중복 로직을 Custom Hook으로 추출해서 재사용성을 높이는 용도
*/

const useInputs = (props) => {
  const [state, dispatch] = useReducer(reducer, props);

  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
};

export default useInputs;
