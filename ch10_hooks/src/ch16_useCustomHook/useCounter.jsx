import { useState } from "react";

const useCounter = (props) => {
  const [count, setCount] = useState(props);

  const addCount = () => setCount((count) => count + 1);

  // 0보다 더 작아지면, 0으로 고정
  const subCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, addCount, subCount];
};

export default useCounter;
