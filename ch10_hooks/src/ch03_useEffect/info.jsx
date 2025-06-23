import { useEffect, useState } from "react";

/**
 * 클래스 컴포넌트 : Life Cycle 메서드
 * 함수 컴포넌트 : useEffect를 사용해서 Life Cycle 시점 호출
 * 
 * useEffect(()=>{}) : render Update마다 등록된 함수가 계속 호출된다.
 */

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const onChangeName = (e)=>{
        setName(e.target.value);
    }
    const onChangeNickname = (e)=>{
        setNickname(e.target.value);
    }

    useEffect(()=>{
        console.log("렌더링이 완료되었습니다.");
        console.log({name, nickname});
    })

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름: </b>{name}
                </div>
                <div>
                    <b>닉네임: </b>{nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;