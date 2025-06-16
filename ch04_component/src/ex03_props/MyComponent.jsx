/**
 * props는 부모 컴포넌트(App)에서 자식 컴포넌트(MyComponent)한테
 * 데이터를 전달할 때 사용하는 객체이다.
 * props는 다른 이름으로 변경 가능하지만, 관습적으로 props를 사용함.
 */

import './Child.css';

function MyComponent(props){
    return <div className="react">안녕하세요. 제 이름은 {props.name}입니다.</div>
}

export default MyComponent;