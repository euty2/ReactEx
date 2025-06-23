import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { useState } from "react";

const Calculator = (props)=>{
    return (
        <div>
            <TemperatureInput scale="C" />
            <TemperatureInput scale="f" />
        </div>
    )
}

export default Calculator;