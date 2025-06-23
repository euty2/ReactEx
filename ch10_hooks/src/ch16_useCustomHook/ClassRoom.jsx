import { useState, useEffect } from "react";
import useCounter from "./useCounter";

const ClassRoom = (props) => {
  const [isFull, setIsFull] = useState(false);
  const [count, addCount, subCount] = useCounter(0);

  // render가 발생할 때마다 계속 호출
  useEffect(() => {
    console.log("========================");
    console.log("useEffect() is called.");
    console.log(`isFull : ${isFull}`);
  });

  const MAX_CAPACITY = 30;

  // count값이 변화될 때만 호출
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 교실에 들어왔습니다.`}</p>
      <button onClick={addCount} disabled={isFull}>
        등교
      </button>
      <button onClick={subCount}>퇴장</button>
      {isFull && <p style={{ color: "red" }}>모든 정원이 등교했습니다.</p>}
    </div>
  );
};

export default ClassRoom;
