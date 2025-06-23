import styled from "styled-components";
import Wrapper from "./Wrapper";
import Block from "./Block";

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
        margin: "10px"
    },
    {
        label: "2",
        padding: "1rem",
        backgroundColor: "green",
        margin: "10px"
    },
    {
        label: "3",
        padding: "1rem",
        backgroundColor: "blue",
        margin: "10px"
    },
    {
        label: "4",
        padding: "1rem",
        backgroundColor: "gold",
        margin: "10px"
    },
    {
        label: "5",
        padding: "1rem",
        backgroundColor: "darkblue",
        margin: "10px"
    },
];

/**
 * ...props : 부모 컴포넌트가 전달한 모든 속성값을 나열한다.
 *            부모전달속성 => 자식한테 그대로 모두 전달
 */
const Blocks = (props)=>{
    return (
        <Wrapper {...props}>
            {blockItems.map((blockItem)=>{
                return (
                    <Block margin={blockItem.margin}
                            padding={blockItem.padding}
                            backgroundColor={blockItem.backgroundColor}
                    >{blockItem.label}</Block>
                )
            })}
        </Wrapper>
    )
}

export default Blocks;