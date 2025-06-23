import { MdAdd, MdAddCircleOutline} from "react-icons/md";
import "./TodoInsert.scss";
import { useCallback, useState } from "react";

const TodoInsert = ()=>{
    const [value, setValue] = useState("");

    // const onChange = (e)=>setValue(e.target.value);
    // 처음 mount될 때 함수가 정의되고 이후에는 갱신하지 않는다.
    const onChange = useCallback((e)=>setValue(e.target.value), []);

    return(
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" 
                value={value} onChange={onChange} />
            <button type="submit">
                <MdAdd />
                {/* <MdAddCircleOutline /> */}
            </button>
        </form>
    )
}

export default TodoInsert;