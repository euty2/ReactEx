import './Child.css';
import React, { Component } from 'react';

// 클래스 컴포넌트
class Child extends Component{

    render(){
        const name = "React";
        return <div className='react'>{name}</div>
    }
}

export default Child;