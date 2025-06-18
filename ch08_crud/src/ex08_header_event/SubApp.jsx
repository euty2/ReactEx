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
  const { topics } = props;
  const lis = topics.map((topic)=>
    <li key={topic.id}>
      <a href={"/read/"+topic.id}>{topic.title}</a>
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

  const topics = [
    {id:1, title:'title', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      {/* 컴포넌트를 만들고, 다양한 용도로 사용하기 위해 이벤트  함수를 컴포넌트 바깥에서 전달한다. */}
      {/* <Header title="WEB" onChangeMode={()=>window.location.href='https://www.naver.com'} /> */}
      {/* <Header title="WEB" onChangeMode={()=>window.location.href='https://www.naver.com'} /> */}
      <Header title="WEB" onChangeMode={()=>alert('Header')} />
      <Nav topics={topics} />
      <Article title="Welcome" body="Hello, Web"/>
    </div>
  );
}

export default SubApp;
