import { useState } from "react";

const Say = () => {
    //     state 변수, state함수 = 초기값설정
    const [message, setMessage] = useState("");

    const onClickEnter = () => setMessage("안녕하세요~");
    const onClickLeave = () => setMessage("안녕히 가세요 ^^");
    /* html에서는 onclick으로 사용하지만,
    react에서는 onClick과 같이 이벤트 명칭에 Camel Case를 적용한다.
     */
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    )
}

export default Say;