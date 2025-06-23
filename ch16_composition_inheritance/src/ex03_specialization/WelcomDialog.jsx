import Dialog from "./Dialog";

/**
 * Dialog 컴포넌트를 가져다가 
 * props의 요소를 프로그래밍에 알맞게 정의해 준다.
 * 이것을 구체화/특별화(Specialization)
 */
const WelcomeDialog = (props)=>{
    return(
        <Dialog title='어서 오세요' message='우리 사이트에 방문하신 것을 환영합니다.' />
    )
}

export default WelcomeDialog;