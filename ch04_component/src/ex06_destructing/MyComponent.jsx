/**
 * {name, children} = props;
 * 
 * 이렇게 써주면 props.name, props.children에서 
 * props를 쓰지 않는다.
 * 
 * children은 <MyComponent></MyComponent> 사이에 들어가는 요소를 의미
 */

const MyComponent = ({name, children}) => {
    return (
        <>
            <div>안녕하세요. 제 이름은 {name}입니다.</div>
            <div>children = {children}입니다.</div>
        </>
    )
}

export default MyComponent;