import Card from "./Card";

const CookCard = (props)=>{
    return (
        <div>
            <Card title="Alex" backgroundColor="#a0434e">
                <p>알렉스의 요리</p>
                <img style={{width:"300px", height: "250px"}} src="https://th.bing.com/th/id/OIP.WwIey32jhyEJEYeIlqGLhwHaFj?w=190&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="" />
                <ul>
                    <li>두부김치 카나페</li>
                    <li>로제 떡볶이</li>
                    <li>김치 피자 탕수육</li>
                    <li>명란젓 파스타</li>
                    <li>카레빵</li>
                </ul>
            </Card>
        </div>
    )
}

export default CookCard;