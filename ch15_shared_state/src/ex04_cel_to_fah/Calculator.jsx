import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { useState } from "react";

const Calculator = (props)=>{
    // 부모에서 상태와 상태저장함수를 만들어서 자식한테 전달한다.
    const [cel_temperature, setCel_temperature] = useState("");
    const cel_handleChange = (value)=> {
        setCel_temperature(value);
        setFah_temperature(toFahrenheit(value));
    }
    const [fah_temperature, setFah_temperature] = useState("");
    const fah_handleChange = (value)=> {
        setFah_temperature(value);
        setCel_temperature(toCelsius(value));
    }
    // 섭씨<->화씨 변환함수
    const toCelsius = (fah)=>((fah-32)*5)/9;    // 화씨->섭씨
    const toFahrenheit = (cel)=>(cel*9)/5+32;   // 섭씨->화씨

    return (
        <div>
            <TemperatureInput scale="C" temperature={cel_temperature}
                            onTemperatureChange={cel_handleChange} />
            <TemperatureInput scale="f" temperature={fah_temperature}
                            onTemperatureChange={fah_handleChange}/>
            <BoilingVerdict celsius={parseFloat(cel_temperature)} />
        </div>
    )
}

export default Calculator;