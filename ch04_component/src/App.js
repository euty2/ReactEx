import logo from './logo.svg';
import './App.css';
// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
// import MyComponent from './ex03_props/MyComponent';
import Library from './ex04_props/Library';

function App() {
  return (
    // <Child />
  /*
    <>
      <MyComponent />
      <MyComponent name='리액트'/>
      <MyComponent name='React'/>
    </>
  */
    <>
      <Library title='유학'/>
      <Library title='조선 선비들의'/>
    </>  
  );
}

export default App;
