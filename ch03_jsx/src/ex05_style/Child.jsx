/**
 * jsx에서 js객체로 스타일을 지정할 수 있다.
 * 단, js는 css와 달리 변수값에 background-color와 같이 -를 지원하지 않으므로,
 * background-color를 backgroundColor의 Camel Case 명명법을 사용한다.
 */

function Child(){
    const name = '리액트';

    const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : '48px',
        fontWeight : 'bold',
        padding: 16
    };

    return <div style={style}>{name}</div>
}

export default Child;