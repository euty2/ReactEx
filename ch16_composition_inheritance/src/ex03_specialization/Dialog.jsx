import FancyBorder from "./FancyBoarder";

const Dialog = (props)=>{
    return(
        <FancyBorder npx="3" color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    )
}

export default Dialog;