/**
 * 더블클릭하면 list의 내용을 삭제한다.
 */
import { useState } from 'react';

const Iteration = () => {
    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e)=>setInputText(e.target.value);

    const onRemove = (id)=>{
        // 배열에서 id와 일치하는 것은 제외하고, 나머지만 다시 배열로 추출
        const nextNames = names.filter((name)=>name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map((name)=>(
        <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>
            {name.text}
        </li>)
    );
    const onClick = () =>{
        // 새로운 객체를 만든다.
        const nextNames = [
            ...names,           // 기존의 배열의 모든 요소를 나열한다.
            {
                id:nextId,
                text:inputText
            }
        ];
        setNames(nextNames);    // 새로운 객체로 기존 객체를 대체한다.
        setNextId(nextId+1);    // id 1증가
        setInputText('');
    }

    const onKeyDown = (e)=>{
        // Enter키가 눌렸을 때 onClick함수 호출
        if(e.key === 'Enter') onClick();
    }

    return (
        <>
            <input value={inputText} onChange={onChange} onKeyDown={onKeyDown}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default Iteration;