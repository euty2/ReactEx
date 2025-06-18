import { useState } from "react";

function Header(props) {
  const {title, onChangeMode} = props;
  return (
    <header>
      <h1>
        <a href="/" onClick={(e)=>{
          e.preventDefault();  
          onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const { topics, onChangeMode } = props;
  const lis = topics.map((topic)=>
    <li key={topic.id}>
      <a id={topic.id} href={"/read/"+topic.id} onClick={(e)=>{
        e.preventDefault();

        // "1"을 1로 변경해서 전달, 문자열을 숫자로 변환
        onChangeMode(Number(e.target.id));    // e.target === <a>
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

function Create(props){
  const { onCreate } = props;
  return (
    <article>
      <h2>Create</h2>
      {/* submit버튼을 누르면 form에서 onSubmit이벤트가 발생한다. */}
      <form onSubmit={(e)=>{
        //alert("submit")
        e.preventDefault(); // 기본동작 막음(page reloading 막음)
        const title = e.target.title.value;
        const body = e.target.body.value;
        onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  );
}

function SubApp() {

  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    {id:1, title:'title', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);

  let content = null;
  let contextControl = null;    // update 화면 태그
  
  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"/>
  }else if(mode === "READ"){
    let title = null;
    let body = null;
    
    topics.forEach(topic=>{
      console.log(typeof id, typeof topic.id)
      if(id == topic.id){ // "1"==1 을 같은 것으로 처리(자동형변환)
        title = topic.title;  // 타입까지 일치해야 같은 것으로 판단
        body = topic.body;
      }
    });

    content = <Article title={title} body={body}/>
    contextControl = (
      <li>
        <a href="/update">Update</a>
      </li> 
    );
  }else if(mode==="CREATE"){
    content = <Create onCreate={(title, body)=>{
      // alert(`${title}:${body}`);
      const newTopic = {title:title, body:body};
      const newTopics = [...topics];
      newTopics.push(newTopic);

      // 객체값은 참조값이 달라져야 useState가 감지하므로
      // 새로운 newTopics객체를 생성해 넣어줘야 ReRendering가 일어난다.
      setTopics(newTopics); 

      setMode("READ");      // READ모드로 해야 추가 항목이 보여짐
      setId(nextId);        // 현재 추가 항목을 보여주기 위해 id를 설정
      setNextId(nextId+1);  // 다음번에 추가할 id값을 위해 1증가
    }} />;
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode("WELCOME");
        console.log(mode);
      }} />
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode("READ");
        console.log(mode);
        setId(id);
      }} />
      {content}
      <ul>
        <li>
          <a href="/create" onClick={(e)=>{
            e.preventDefault();
            setMode("CREATE");
          }}>Create</a>
        </li>
         {contextControl}
      </ul>
    </div>
  );
}

export default SubApp;
