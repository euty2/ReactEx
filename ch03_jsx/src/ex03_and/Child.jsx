/* && : and 연산자는 앞의 구문이 참일 때 비로소 뒤의 구문을 실행한다.
         만약 앞의 구문이 거짓이면, 뒤의 구문은 실행하지 않는다.
 */

function Child(){
    // const name = '리액트';
    const name = '리Ac트';

    return (
        <>
            {name==='리액트' && <h1>리액트입니다.</h1>}
        </>
    )
}

export default Child;