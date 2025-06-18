function Header() {
  // <header> 부분 가져옴
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  // <nav> 부분 가져옴
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  // <article> 부분 가져옴
  return (
    <article>
      <h1>Welcome</h1>
      Hello, WEB
    </article>
  );
}

function SubApp() {
  return (
    <div>
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default SubApp;
