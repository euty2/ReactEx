import styled from "styled-components";
import Wrapper from "./Wrapper";
import Block from "./Block";

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
        margin: "10px",
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/02/27/20/41/cute-3186532_1280.jpg")`,
    },
    {
        label: "2",
        padding: "1rem",
        backgroundColor: "green",
        margin: "10px",
        backgroundImage: `url("https://i.pinimg.com/236x/3b/fd/30/3bfd30bb02fb700cedb5d2c85c0ba13b.jpg")`,
    },
    {
        label: "3",
        padding: "1rem",
        backgroundColor: "blue",
        margin: "10px",
        backgroundImage: `url("https://i.pinimg.com/736x/b1/d0/5e/b1d05e476fb948f011a8d797b0074ff6.jpg")`,
    },
    {
        label: "4",
        padding: "1rem",
        backgroundColor: "gold",
        margin: "10px",
        backgroundImage: `url("https://static.blex.me/images/title/dog/2019/11/5/154625.jpg")`,
    },
    {
        label: "5",
        padding: "1rem",
        backgroundColor: "darkblue",
        margin: "10px",
        backgroundImage: `url("https://cdn.korea-press.com/news/photo/201310/18203_9397_4526.jpg")`,
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
                            backgroundImage={blockItem.backgroundImage}
                    >{blockItem.label}</Block>
                )
            })}
        </Wrapper>
    )
}

export default Blocks;