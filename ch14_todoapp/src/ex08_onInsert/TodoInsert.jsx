import { MdAdd, MdAddCircleOutline} from "react-icons/md";
import "./TodoInsert.scss";
import { useCallback, useState } from "react";

const TodoInsert = (props)=>{
    const { onInsert } = props;

    const [value, setValue] = useState("");

    // const onChange = (e)=>setValue(e.target.value);
    // 처음 mount될 때 함수가 정의되고 이후에는 갱신하지 않는다.
    const onChange = useCallback((e)=>setValue(e.target.value), []);

    // onInsert나 value가 갱신되면, 함수도 갱신
    const onSubmit = useCallback((e)=>{
        e.preventDefault();     // onSubmit은 '브라우저 Refresh기능'이 있어서 막음
        onInsert(value);        // 부모한테 Callback함수로 전달
        setValue("");
    }, [onInsert, value]);

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
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