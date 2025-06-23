import logo from "./logo.svg";
import "./App.css";
// import ReactButton from './ex01_nonstyled/ReactButton';
// import StyledButton from './ex02_styled/StyledButton';
// import SimpleButton from './ex03_styled/SimpleButton';
// import SimpleButton from './ex04_styled/SimpleButton';
// import LargeButton from './ex05_styled/LargeButton';
// import PrimaryButton from './ex06_styled/PrimaryButton';
// import PrimaryButton from './ex07_styled/PrimaryButton';
// import PrimaryButton from './ex08_styled/PrimaryButton';
// import PrimaryButton from "./ex09_styled/PrimaryButton";
// import SecondButton from "./ex09_styled/SecondButton";
// import Blocks from "./ex10_styled/Blocks";
// import Blocks from "./ex11_styled/Blocks";
import Blocks from "./ex12_styled/Blocks";

function App() {
  return (
    // <ReactButton>안녕하세요</ReactButton>
    // <StyledButton>감사합니다</StyledButton>
    // <SimpleButton>존경합니다</SimpleButton>
    // <LargeButton>사랑합니다</LargeButton>

    // <>
    //   <PrimaryButton primary>감사합니다</PrimaryButton>
    //   <PrimaryButton>감사합니다</PrimaryButton>
    // </>

    // <>
    //   <PrimaryButton primary>감사합니다</PrimaryButton>
    //   <PrimaryButton>감사합니다</PrimaryButton>
    //   <SecondButton primary>Happy ^^</SecondButton>
    //   <SecondButton>Good~</SecondButton>
    // </>

    // <Blocks />

    // <>
    //   <Blocks />
    //   <Blocks column />
    //   <Blocks stretch />
    //   <Blocks baseline />
    // </>

    <>
      <Blocks />
      <Blocks column />
    </>
  );
}

export default App;
