import { useState } from "react";

/*  Hook
    (마치 갈고리를 걸은 것처럼 변경사항을 모니터링)
    state

    1) 지역변수 number로 했을 때 문제점
       ; Counter함수 내에 선언하게 되면
         Counter가 다시 그려질 때(Rendering)
         값이 초기화 된다는 단점이 있다.
    2) 전역변수 number로 했을 때 문제점
       ; Counter함수 외부의 변수와 함수가 연결지어지므로
         독립성이 훼손되며, 전역변수가 많아지면 관리가 어렵다.
         그리고 전역변수와 함수를 항상 함께 묶어야 한다.
    3) 위의 2가지에 대한 대안으로 state를 만들었다.
       number의 값을 직접 변경하지 말고,
       반드시 setNumber를 통해 변경해야 한다.
       그래야 React의 Hook 매커니즘이 동작해서
       state가 포함된 함수 컴포넌트의 ReRendering이 발생한다.
       그리고 state는 React에 의해서 값이 보관되므로
       ReRendering와 관계없이 값이 유지된다.
*/

function Counter(){
    // state변수, state 함수    = number의 초기값
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(number+1);
                /* setNumber의 역할
                1)
                 */
            }}> ++ </button>
        </div>
    )
}

export default Counter;