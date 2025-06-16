import Comment from "./Comment";

const comments = [
  {
    name: "파울로 코엘료",
    comment: "언제나 현재에 집중할수 있다면 행복할것이다.",
  },
  {
    name: "키케로",
    comment: "삶이 있는 한 희망은 있다.",
  },
  {
    name: "찰리 채플린",
    comment:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
  },
  {
    name: "켄러",
    comment: "신은 용기있는자를 결코 버리지 않는다.",
  },
  {
    name: "로버트 엘리엇",
    comment: "피할수 없으면 즐겨라.",
  },
  {
    name: "L론허바드",
    comment: "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
  },
  {
    name: "허버드",
    comment: "행복은 습관이다,그것을 몸에 지니라.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((elem) => {
        const { name, comment } = elem;
        return <Comment name={name} comment={comment} />;
      })}
    </div>
  );
}

export default CommentList;