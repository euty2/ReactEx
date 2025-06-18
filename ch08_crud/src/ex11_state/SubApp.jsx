import { useState } from "react";

function Header(props) {
  const {title, onChangeMode} = props;
  return (
    <header>
      <h1>
        <a href="/" onClick={(e)=>{
          e.preventDefault();  // <a>태그 기능 정지
          onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  // props로부터 받은 topics를 가공해서 <li>요소로 만들어서 list에 추가할 예정임.
  const { topics, onChangeMode } = props;
  const lis = topics.map((topic)=>
    <li key={topic.id}>
      <a id={topic.id} href={"/read/"+topic.id} onClick={(e)=>{
        e.preventDefault();
        onChangeMode(e.target.id);    // e.target === <a>
      }}>{topic.title}</a>
    </li>)
 
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  // <article> 부분 가져옴
  return (
    <article>
      <h1>{props.title}</h1>
      {props.body}
    </article>
  );
}

function SubApp() {

  // let mode = "WELCOME";
  const [mode, setMode] = useState("WELCOME");

  const topics = [
    {id:1, title:'title', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ];

  let content = null;

  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"/>
  }else if(mode === "READ"){
    content = <Article title="Welcome" body="Hello, Read"/>
  }

  /* <Header>를 누르면 mode의 값이 "WELCOME"으로 설정된다.
    <Nav>내의 리스트를 누르면 model의 값이 "READ"로 설정된다.
    변수의 값이 바뀌지만, React는 이 사실을 통보받지 못한다.
    React가 이 사실을 통보받아야 이 컴포넌트를 ReRendering함으로써
    mode값 변경에 따른 content에 들어가는 태그가 달라지게 된다.

    mode를 useState를 사용하는 변수로 만들어야 React에 의해서 
    다시 그려지게 된다.
   */

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        // mode="WELCOME"
        // 반드시 setMode로 변경해야 React엔진이 변경을 감지해서 
        // SubApp를 ReRendering하게 된다.
        setMode("WELCOME");
        console.log(mode);
      }} />
      <Nav topics={topics} onChangeMode={(id)=>{
        // mode="READ"
        setMode("READ");
        console.log(mode);
      }} />
      {content}
    </div>
  );
}

export default SubApp;
