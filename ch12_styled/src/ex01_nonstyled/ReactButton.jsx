const ReactButton = (props)=>{
    const style = {
        color: "white",
        backgroundColor: "purple",
        margin: "10px"
    }

    return <button style={style}>{props.children}</button>
}

export default ReactButton;