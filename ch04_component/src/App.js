import logo from "./logo.svg";
import "./App.css";

// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
// import MyComponent from "./ex03_props/MyComponent";
// import Library from "./ex04_props/Library";
// import MyComponent from "./ex05_arrow/MyComponent";
// import MyComponent from "./ex06_destructing/MyComponent";
// import Team from "./ex07_composition/Team";
// import Comment from "./ex08_extraction/Comment";
// import Comment from "./ex09_extraction/Comment";
// import Comment from "./ex10_extraction/Comment";
// import Comment from "./ex11_extraction/Comment";
// import Comment from "./ex12_extraction/Comment";
// import CommentList from "./ex13_commentlist/CommentList";
// import CommentList from "./ex14_commentlist/CommentList";
import CommentList from "./ex15_commentlist/CommentList";

function App() {
  // return (
  // <Child/>

  /*
    <>
      <MyComponent />
      <MyComponent name='리액트'/>
      <MyComponent name='React'/>
    </>
    */

  /*
    <>
      <Library title='유학' />
      <Library title='조선 선비들의' />
    </>
    */

  /*
    <>
      <MyComponent name="python" />
      <MyComponent name="javascript" />
      <MyComponent name="java" />
    </>
    */

  /*
    <>
      <MyComponent name='리액트'>React Programming</MyComponent>
      <MyComponent name='React, Vue'>컴포넌트 제작</MyComponent>
    </>
    */

  /*
    <Team title="재능 기부 교류 서비스" />
    */

  // );

  /*
  const author = {
    avatarUrl: "data:image/jpeg;base64,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",
    name: "강아지",
  };
  const text = "Thank You~";
  const date = "2025-06-13";

  return <Comment author={author} text={text} date={date} />;
  */

  return <CommentList />
}

export default App;
