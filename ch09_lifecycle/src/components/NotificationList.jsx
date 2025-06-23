import React, {Component} from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요. 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

// 클래스 컴포넌트는 반드시 Component를 상속받아야 한다.
class NotificationList extends Component{
    // 생성자
    constructor(props){
        super(props);

        this.timer = null;

        // 함수 컴포넌트의 useState와 동일함.
        this.state = {
            notifications: [],
        };

        // console.log("NotificationList 생성자");
    }

    // Mount가 완료되는 시점에 호출(컴포넌트가 dom에 연결), 주로 동작 초기화시 많이 사용한다.
    componentDidMount(){
        const { notifications } = this.state;

        this.timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications:notifications,
                });
            }else{
                this.setState({
                    notifications: [],
                });
                clearInterval(this.timer);
                this.timer = null;
            }
        }, 1000);

        // console.log("NotificationList-componentDidMount()");
    }

    // Unmount될 때 호출(종료 시점)
    componentWillUnmount(){
        if(this.timer) clearInterval(this.timer);
        // console.log("NotificationList-componentWillUnmount()");
    }

    // 화면을 그려야 할 때(시작하고 나서, state가 변경될 때)
    render(){
        // console.log("NotificationList-render()");
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return(
                        <Notification key={notification.id} id={notification.id} message={notification.message} />
                    )
                })}
            </div>
        )
    }
}

export default NotificationList;