import { useState } from "react";
import "./Child.css";

export default function Child({ onClick }) {
    const [isClick, setIsClick] = useState(false);

    function handleClick() {
        const newState = !isClick;
        setIsClick(newState);
        onClick(newState);
    }

    return (
        <div className={`cell ${isClick ? "black" : ""}`} onClick={handleClick}>
            
        </div>
    )
}