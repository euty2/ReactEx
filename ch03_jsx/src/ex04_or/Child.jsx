/* || : or 연산자는 앞의 구문이 거짓일 때, 뒤의 구문을 실행한다.
        .앞의 구문이 참이면, 뒤의 구문은 실행하지 않는다.
*/

function Child(){
    const name = undefined;

    return (
        <>
            {name || <h1>값이 undefined입니다.</h1>}
        </>
    )
}

export default Child;