/**
    특별한 key가 없으면 index를 부여한다.
 */
const Iteration = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    // map은 기존 배열을 새로운 형태의 배열로 리턴
    const nameList = names.map((name, index)=><li key={index}>{name}</li>)
    console.log(nameList);
    return <ul>{nameList}</ul>
}

export default Iteration;