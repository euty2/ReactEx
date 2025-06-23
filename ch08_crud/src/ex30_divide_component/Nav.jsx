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

export default Nav;