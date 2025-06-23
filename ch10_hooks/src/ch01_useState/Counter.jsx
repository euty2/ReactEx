import { useState } from "react";

/**
 * state는 리액트에 의해 관리되는 변수
 * 위치는 함수(컴포넌트)내의 지역에 존재하지만
 * 실제 값은 리액트에 의해 보관된다.
 * 
 * 만약 state를 사용하지 않고, 함수 내의 지역변수를 사용하면
 * 함수가 Re-Rendering(다시 호출)될 때 초기화 되므로
 * 값을 보관할 수 없다.
 */

/**
 * value는 0으로 초기화
 * setValue를 통해 value의 값을 변경시켜야
 * React엔진이 Counter를 Re-Rendering하기 때문에
 * 반드시 setValue를 통해 값을 변경시켜야 한다.
 */
const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b></p>
            <button onClick={()=>setValue(value+1)}>++</button>
            <button onClick={()=>setValue(value-1)}>--</button>
        </div>
    )
}

export default Counter;