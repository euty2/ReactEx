import Card from "./Card";

const ProfileCard = (props)=>{
    return (
        <div>
            <Card title="Albert" backgroundColor="#43a04e">
                <p>안녕하세요. 알버트입니다.</p>
                <p>리액트 실력이 점점 늘어가고 있습니다.</p>
            </Card>
        </div>
    )
}

export default ProfileCard;