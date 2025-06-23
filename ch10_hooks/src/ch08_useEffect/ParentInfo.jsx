import { useState } from "react";
import Info from "./Info";

const ParentInfo = () => {
    const [visible, setVisible] = useState(true);

    return(
        <div>
            {/* 버튼 누를 때마다 visible이 true, false를 반복한다 */}
            <button onClick={()=>setVisible(!visible)}>
                {visible ? "숨기기" : "보이기"}
            </button>
            <hr/>
            {/* visible이 true일 때 <Info />가 실행 */}
            {visible && <Info />}
        </div>
    )
}

export default ParentInfo;