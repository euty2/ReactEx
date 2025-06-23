import { useState } from "react";
import Article from "./Article";
import Create from "./Create";
import Update from "./Update";
import Header from "./Header";
import Nav from "./Nav";


function SubApp() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  // topics값이 변경될 때 ReRendering가 적용되야 하므로 useState로 전환함
  const [topics, setTopics] = useState([
    { id: 1, title: "title", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);

  let content = null;
  let contextControl = null; // update 화면 태그

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === "READ") {
    let title = null;
    let body = null;

    topics.forEach((topic) => {
      console.log(id, topic.id);
      console.log(typeof id, typeof topic.id);

      // if(id == topic.id){ // "1"==1 을 같은 것으로 처리(자동형변환)
      if (id === topic.id) {
        // 타입까지 일치해야 같은 것을 판
        title = topic.title;
        body = topic.body;
      }
    });

    content = <Article title={title} body={body} />;
    contextControl = (
      <>
        <li>
          <a href={"/update/"+id} onClick={(e)=>{
            e.preventDefault();
            setMode("UPDATE");
          }}>Update</a>
        </li>
        <li>
          <input type="button" value="Delete" onClick={()=>{
            // 현재 선택된 id는 거르고, 다른 것은 배열로 추출
            const newTopics = topics.filter((topic)=>id!==topic.id);
            setTopics(newTopics);
            setMode("WELCOME");
          }}/>
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          // alert(`${title}:${body}`);
          const newTopic = { id: nextId, title: title, body: body };
          const newTopics = [...topics];
          newTopics.push(newTopic);

          // 객체값은 참조값이 달라져야 useState가 감지하므로
          // 새로운 newTopics객체를 생성해 넣어줘야 ReRendering가 일어난다.
          setTopics(newTopics);

          setMode("READ"); // READ모드로 해야 추가 항목이 보여짐
          setId(nextId); // 현재 추가 항목을 보여주기 위해 id를 설정
          setNextId(nextId + 1); // 다음번에 추가할 id값을 위해 1증가
        }}
      />
    );
  }else if(mode === "UPDATE"){
    const {title, body} = topics.filter((topic)=>id===topic.id)[0];
    content = <Update title={title} body={body}
                  onUpdate={(title, body)=>{
                    // alert(title+":"+body);
                    const updateTopic = {id:id, title:title, body:body};
                    const newTopics = [...topics];
                    for(let i=0;i<newTopics.length;i++){
                      //id가 일치하는 항목을 찾아서 갱신
                      if(newTopics[i].id === id){
                        newTopics[i] = updateTopic;
                        break;
                      }
                    }
                    setTopics(newTopics);
                    setMode("READ");
                  }} />;
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
          console.log(mode);
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          console.log(mode);
          setId(id);
        }}
      />
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(e) => {
              e.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default SubApp;