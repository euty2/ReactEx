function SubApp(){
    return (
        <div>
            {/* 헤더 영역 */}
            <header>
                <h1>
                    <a href="/">WEB</a>
                </h1>
            </header>
            {/* 네비게이션 영역 */}
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
            {/* 본문 영역 */}
            <article>
                <h1>Welcome</h1>
                Hello, WEB
            </article>
        </div>
    )
}

export default SubApp;