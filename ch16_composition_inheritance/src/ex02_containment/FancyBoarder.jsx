const FancyBorder = (props)=>{
    return (
        <div style={{border: `${props.npx}px solid ${props.color}`}}>
            {props.children}
        </div>
    )
}

export default FancyBorder;