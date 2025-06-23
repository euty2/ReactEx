import { useReducer } from "react";

/*
  {
   name:"",
   nickname:"",
   name:"Albert"
  }

  => 
  {
   nickname:"",
   name:"Albert"
  }

  {
   name:"",
   nickname:"",
   nickname:"Smurf"
  }

  => 
  {
   name:"",
   nickname:"Smurf"
  }
*/
const reducer = (state, action)=>{
    return {
        ...state,                       // 기존 state값을 나열
        [action.name] : action.value    // 위의 state값을 덮어쓴다.
    }
}

const Info = () => {
    //    [state변수, 액션전달함수] = useReducer(수신함수, state값)
    const [state, dispatch] = useReducer(reducer, {name:"", nickname:""});
    const {name, nickname} = state;

    const onChange = (e) => {
        // e.target 이벤트를 발생시킨 엘리먼트(요소)
        dispatch(e.target);
    }

    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div><b>이름:</b> {name}</div>
                <div><b>별명:</b> {nickname}</div>
            </div>
        </div>
    )
}

export default Info;