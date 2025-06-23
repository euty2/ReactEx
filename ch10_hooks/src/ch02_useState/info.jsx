import { useState } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const onChangeName = (e)=>{
        /* e.target.value : 입력값
           setName의 역할
             1) name = e.target.value;
             2) React엔진에 Info를 Re-Redering하도록 이벤트 발생
         */
        setName(e.target.value);
    }
    const onChangeNickname = (e)=>{
        /* e.target.value : 입력값
           setNickname의 역할
             1) nickname = e.target.value;
             2) React엔진에 Info를 Re-Redering하도록 이벤트 발생
         */
        setNickname(e.target.value);
    }

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