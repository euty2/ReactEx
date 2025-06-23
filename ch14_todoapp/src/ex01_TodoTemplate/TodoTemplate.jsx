// npm install sass classnames react-icon 설치한다

const TodoTemplate = (props)=>{
    const { children } = props;

    return (
        <div>
            <div>일정 관리</div>
            <div>{children}</div>
        </div>
    )
}

export default TodoTemplate;