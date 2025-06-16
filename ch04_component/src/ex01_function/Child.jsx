import "./Child.css";

/**
 * [리액트 컴포넌트]
 * 1. 함수 컴포넌트
 *   현재 이것을 사용
 *   Hook의 새로운 문법을 도입하면서
 *   클래스에서 하던 것을 함수에서 가능하게 되었다.
 *   리액트 개발자 === js 개발자 === 함수 방식 선호
 * 
 * 2. 클래스 컴포넌트
 *   예전 방식
 *   이전 것을 사용하지만, 이 방식으로 만들지 않는다.
 * 
 */

function Child(){
    const name = '리액트';

    return <div className="react">{name}</div>
}

export default Child;