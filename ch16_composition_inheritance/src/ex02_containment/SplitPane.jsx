/**
 * 포함하고  싶은 자식이 다수 일 때
 * 1개의 하위 컴포넌트는  {props.children}으로 사용하면 된다.
 * 여러 개 일때는 다수의 이름을 지정해서 영역을 나눠주면 된다.
 */
const SplitPane = (props)=>{
    return (
        <div className="SplitPane"
            style={{display:"flex", border:`${props.npx}px solid ${props.color}`}}>
            <div style={{flex:1}} className="SplitPane-left">
                {props.left}
            </div>
            <div style={{flex:2}} className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

export default SplitPane;