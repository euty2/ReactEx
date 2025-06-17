/**
 * React는 <li></li>와 같은 동일한 자식 엘리먼트가 반복될 때
 * 이것을 구분하는 정보를 원한다.
 * 이것을 key라고 한다.
 * 만약 이것을 부여하지 않으면 console창에 warning을 
 */
const Iteration = () => {
    const names = ['눈사람', '얼음', '눈', '바람'];
    // map은 기존 배열을 새로운 형태의 배열로 리턴
    const nameList = names.map((name)=><li>{name}</li>)
    console.log(nameList);
    return <ul>{nameList}</ul>
}

export default Iteration;