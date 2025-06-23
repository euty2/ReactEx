import { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);  // list의 누적합 계산
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  /**
   * useMemo는 최적화시 사용한다.
   * 즉, 연산량을 감소시킬 때 사용한다.
   * 
   * 아래 문법은, 2번째 인자에 등록한 [list]를 통해
   * list변화시에만 아래 useMemo내부의 함수가 동작한다.
   * 그러므로 이제 list가 변할 때, 즉 setList가 호출되면
   * useMemo내의 getAverage(list)가 동작해서 avg의 업데이트가
   * 이루어지지만, number가 변할 때, 즉 setNumber가 호출될때는
   * avg의 업데이트가 일어나지 않게 된다.
   */
  const avg = useMemo(()=>getAverage(list), [list]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    // list에 number를 추가
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

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
