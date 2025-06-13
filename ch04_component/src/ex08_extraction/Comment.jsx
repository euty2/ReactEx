/*
   추출
   ; 기능 완성 후
   기능별로 작게 쪼개기
   하향식 설계(Top-down)
 */
function Comment(props){
    function formatDate(date){
        <div>날짜 : {date}</div>
    }

    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar"
                    src = {props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="user-info-name">{props.author.name}</div>
            </div>
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    )
}

export default Comment;