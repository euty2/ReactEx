import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { useState } from "react";

const Calculator = (props)=>{
    // 부모에서 상태와 상태저장함수를 만들어서 자식한테 전달한다.
    const [temperature, setTemperature] = useState("");
    const handleChange = (value)=>setTemperature(value);

    return (
        <div>
            <TemperatureInput scale="C" temperature={temperature}
                            onTemperatureChange={handleChange} />
            <TemperatureInput scale="f" temperature={temperature}
                            onTemperatureChange={handleChange}/>
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </div>
    )
}

export default Calculator;