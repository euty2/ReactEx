// npm install sass classnames react-icon 설치한다

import "./TodoTemplate.scss";

const TodoTemplate = (props)=>{
    const { children } = props;

    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;