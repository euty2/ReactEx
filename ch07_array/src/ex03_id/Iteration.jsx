/**
    특별한 key가 없으면 index를 부여한다.
 */
const Iteration = () => {
    const names = [
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'},
    ];
    // map은 기존 배열을 새로운 형태의 배열로 리턴
    const nameList = names.map((name)=><li key={name.id}>{name.text}</li>)
    console.log(nameList);
    return <ul>{nameList}</ul>
}

export default Iteration;