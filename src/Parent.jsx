import { useState } from  "react";
import Child from "./Child";
import "./Parent.css";

export default function Parent() {
    const [onCount, setOnCount] = useState(0);

    function handleCount(isOn) {
        setOnCount(prevCount => (isOn ? prevCount + 1 : prevCount - 1));
    }

    return (
        <div className="grid-container">
            <h2>Count: {onCount}</h2>
            <div className="grid">
                <Child onClick={handleCount} />
                <Child onClick={handleCount} />
                <Child onClick={handleCount} />
                <Child onClick={handleCount} />
            </div>
        </div>
    )
}