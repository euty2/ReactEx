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

export default Header;