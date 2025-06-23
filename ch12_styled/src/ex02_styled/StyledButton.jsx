// npm install styled-components 설치해야 한다.

import styled from "styled-components";

// js 스타일 대신 css 스타일을 그래도 사용할 수 있다.
const StyledButton = styled.button`
    color: white;
    background-color: purple;
    margin: 10px;
`;

export default StyledButton;