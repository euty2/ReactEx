import Student from "./Student";

/*
    [컴포넌트 합성]
    ; 상향식 설계(Bottom-up)
    기본 컴포넌트 설계 -> 상위 컴포넌트 조립
*/

function Team(props){
    return (
        <>
            <h1>프로젝트 주제는 {props.title}입니다.</h1>
            <Student name="Mike" work="팀장" />
            <Student name="Steve" work="BackEnd" />
            <Student name="John" work="React.js" />
            <Student name="알버트" work="DB설계" />
            <Student name="제임스" work="클라우드설계" />
            <Student name="알렉스" work="CI/CD" />
        </>
    )
}

export default Team;