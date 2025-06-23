import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const avg = useMemo(() => getAverage(list), [list]);

  /* useCallback도 성능향상 시 사용하는 문법
    * 만약 useCallback을 사용하지 않으면 Hook Event 발생 -> 컴포넌트 Re-Rendering
      -> 무조건 함수 객체 다시 생성해서 전달

    1) useCallback(()=>{}, [])   : 처음 Mount될 때 함수 1번만 생성해서 전달
    2) useCallback(()=>{}, [number, list]) : number 또는 list의 변화시 함수 객체 다시 생성
   */

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // 함수 내에서 number와 list값을 가져와서 사용하고 있다.
  // number나 list의 값이 변화되었다면 다시 가져와서 호출되어야 하므로
  // 아래처럼 작성한다.
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [number, list]
  );

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
