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

export default Create;