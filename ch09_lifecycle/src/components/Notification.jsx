import React, {Component} from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    }
}

class Notification extends Component{
    constructor(props){
        super(props);

        this.state = {};
        console.log(`${this.props.id} Notification : constructor()`);
    }

    componentDidMount(){
        console.log(`${this.props.id} Notification : componentDidMount()`);
    }
    componentDidUpdate(){
        console.log(`${this.props.id} Notification : componentDidUpdate()`);
    }
    componentDidUnmount(){
        console.log(`${this.props.id} Notification : componentDidUnmount()`);
    }

    render(){
        console.log(`${this.props.id} Notification : render()`);
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;