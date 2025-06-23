import FancyBorder from "./FancyBoarder";

/**
 * <FancyBorder></FancyBorder>사이에 들어가는 내용이
 * props.children이 된다.
 *
 * children에 어떤 것을 포함(Containment)하느냐에 따라
 * 같은 <FancyBorder>라도 다르게 구성된다.
 */
const WelcomeDesc = (props) => {
  return (
    <FancyBorder npx={10} color="red">
      {/* 이 부분이 props.children으로 전달된다. */}
      <h1 className="Desc-title">어서오세요</h1>
      <p>
        <img src="https://th.bing.com/th/id/OIP.sS8oLZe4oVqpqRwfFDrm3wHaE8?w=304&h=203&c=7&r=0&o=7&pid=1.7&rm=3" alt="블루베리" />
      </p>
      <p className="Desc-summing">
        블루베리는 작은 크기의 보랏빛 열매로, 풍부한 항산화 성분과 비타민 C,
        식이섬유를 함유하고 있어 건강에 매우 유익한 과일입니다. 달콤하고 상큼한
        맛 덕분에 생과로 먹거나 요거트, 스무디, 디저트 등에 다양하게 활용됩니다.
        뇌 건강과 시력 개선에도 도움을 줄 수 있어 ‘슈퍼푸드’로도 잘 알려져
        있습니다.
      </p>
      <p className="Desc-description">
        블루베리는 북아메리카 원산의 진달래과 식물로, 작고 둥근 보라색 열매를
        맺는 관목입니다. 항산화 성분인 안토시아닌이 풍부해 시력 보호, 노화 방지,
        심혈관 건강 개선 등에 효과가 있으며, 비타민 C, K, 식이섬유, 망간 등
        다양한 영양소를 함유하고 있어 ‘슈퍼푸드’로 불립니다.
      </p>
    </FancyBorder>
  );
};

export default WelcomeDesc;
