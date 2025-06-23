import { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);  // list의 누적합 계산
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

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
        {/*         
        getAverage는 list가 변했을 때만 평균을 계산하기 위해 호출되는 것이 좋다.
        하지만 list, number 모두 useState로 만들어졌기 때문에
        number가 변해도 Re-Rendering이 발생하므로
        불필요하게 아래 getAverage(list)도 호출되게 된다.
        Application이 만들어질 때 수많은 Component의 조합으로 구성되는데
        Component들의 작은 성능 차이는 결국 전체 Application의 차이를
        가져오게 된다.
        이럴 때 useMemo를 사용하면 성능을 향상할 수 있다. 
        */}
        <b>평균값: </b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
