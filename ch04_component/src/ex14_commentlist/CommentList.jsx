import Comment from "./Comment";

function CommentList(props){
    return (
        <div>
            <Comment name={"알버트"} comment={"나의 컴포넌트입니다."} />
            <Comment name={"존 F 케네디"} comment={"뉴 프론티어(New Frontier)"} />
            <Comment name={"링컨"} comment={"국민을 위한 정부(게티즈버그)"} />
        </div>
    )
}

export default CommentList;