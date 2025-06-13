import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';

/*
jsx = js + eXtension
      js + Xml
1) js 확장문법
2) js (함수)컴포넌트를 html태그 선언으로 쉽게 만들 수 있도록 도와주는 문법
3) jsx -> React.createElement로 변환처리된다.
4) return은 반드시 1개 요소로 묶어서 반환해야 한다.
*/

function App() {
  // return <div>Hello React!</div>

  /* // 아래는 2개로 반환하므로 에러 발생한다.
  return (
    <h1>리액트 안녕</h1>
    <h2>잘 동작하니?</h2>
  );
  */
 /*
  return (
  <>
    <h1>리액트 안녕</h1>
    <h2>잘 동작하니?</h2>
  </>
  );
  */
 /*
  return (
    <Fragment>
      <h1>리액트 안녕</h1>
      <h2>잘 동작하니?</h2>
    </Fragment>
  );
  */
 /*
 return (
    <div>
      <h1>리액트 안녕</h1>
      <h2>잘 동작하니?</h2>
    </div>
  );
  */
 return (
    <div>
      <h1>리액트 안녕</h1>
      <h2>잘 동작하니?</h2>
      <h2>감사합니다.</h2>
      <h2>행복합니다.</h2>
    </div>
  );
}

export default App;
