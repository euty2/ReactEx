/*
   추출
   ; 기능 완성 후
   기능별로 작게 쪼개기
   하향식 설계(Top-down)
 */

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar author={props.author} />
      <div className="user-info-name">{props.author.name}</div>
    </div>
  );
}

function CommentText(props){
  return <div className="comment-text">{props.text}</div>
}

function CommentDate(props){
  function formatDate(date) {
    <div>날짜 : {date}</div>;
  }

  return <div className="comment-date">{formatDate(props.date)}</div>
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo author={props.author} />
      <CommentText text={props.text} />
      <CommentDate date={props.date} />
    </div>
  );
}

export default Comment;
