// jsx표현식에서는 if문을 사용할 수 없으므로, 대신 조건 연산자를 사용한다.

function Child(){
    // const name = '리액트';
    const name = '리웨에엑~~~트'

    return (
        <>
            {name==='리액트' ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
        </>
    )
}

export default Child;