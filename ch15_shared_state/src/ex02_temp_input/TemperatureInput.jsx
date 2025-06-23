import { useState } from "react";

const TemperatureInput = (props)=>{
    const scaleNames = {
        c: "섭씨",
        f: "화씨"
    };

    const [temperature, setTemperature] = useState("");

    const handleChange = (e)=> setTemperature(e.target.value);

    return (
        <fieldset>
            <legend>온도를 입력하세요(단위: 섭씨{scaleNames[props.scale]})</legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput;