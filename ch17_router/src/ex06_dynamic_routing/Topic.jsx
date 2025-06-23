import { useState } from "react";
import { useParams } from "react-router-dom";

const Topic = (props)=>{
    const { contents } = props;

    // /topics/ 뒤에 추가한 파라미터를 추출한다.
    const params = useParams();
    const topic_id = params.topic_id;

    let selected_topic = {
        title: "Sorry",
        description: "Not Found"
    }

    // contents 배열을 하나씩 꺼내서 검사하여, 조건과 일치하는 배열 요소를 리턴한다.
    selected_topic = contents.find((content)=>content.id===Number(topic_id));
    console.log(selected_topic);

    return (
        <div>
            <h3>{selected_topic.title}</h3>
            {selected_topic.description}
        </div>
    )
}

export default Topic;